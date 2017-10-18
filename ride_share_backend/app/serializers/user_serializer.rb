class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :trips
	has_many :trips
end
