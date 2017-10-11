class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :seats, :year, :make, :model, :passed_inspection
end

