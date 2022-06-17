import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js';

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const getAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;

  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gte: min || 1, $lte: max || 9999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been deleted.');
  } catch (error) {
    next(error);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(',');

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: 'hotel' });
    const apartmentCount = await Hotel.countDocuments({ type: 'apartment' });
    const resortCount = await Hotel.countDocuments({ type: 'resort' });
    const villaCount = await Hotel.countDocuments({ type: 'villa' });
    const cabinCount = await Hotel.countDocuments({ type: 'cabin' });

    res.status(200).json([
      { type: 'hotel', count: hotelCount },
      { type: 'apartment', count: apartmentCount },
      { type: 'resort', count: resortCount },
      { type: 'villa', count: villaCount },
      { type: 'cabin', count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );

    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
