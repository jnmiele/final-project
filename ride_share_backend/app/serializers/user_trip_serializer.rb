class UserTripSerializer < ActiveModel::Serializer
  attributes :id, :user, :trip, :role, :confirmed
end
