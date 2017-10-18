class TripSerializer < ActiveModel::Serializer
  attributes :id, :origin, :destination, :date, :time, :driver, :passengers, :user_trips
  has_many :passengers
	has_many :user_trips
end
