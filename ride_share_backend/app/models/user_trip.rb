class UserTrip < ApplicationRecord
	belongs_to :user
	belongs_to :trip

	def user
		User.find(self.user_id)
	end

	def trip
		Trip.find(self.trip_id)
	end
end
