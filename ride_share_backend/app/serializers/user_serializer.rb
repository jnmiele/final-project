class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :rating
	has_many :trips
end
