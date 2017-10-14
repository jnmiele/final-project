class UserTripSerializer < ActiveModel::Serializer
  attributes :id, :user, :trip, :role
end
