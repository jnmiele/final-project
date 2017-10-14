class TripSerializer < ActiveModel::Serializer
  attributes :id, :origin, :destination, :date, :time, :driver
  has_many :passengers
end
