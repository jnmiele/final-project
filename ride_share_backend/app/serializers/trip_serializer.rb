class TripSerializer < ActiveModel::Serializer
  attributes :id, :origin, :destination, :driver
  has_many :passengers
end
