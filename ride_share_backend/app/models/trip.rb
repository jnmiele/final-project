class Trip < ApplicationRecord
	has_many :user_trips
	has_many :users, through: :user_trips

	def driver
		self.user_trips.find{|ut, role| ut.role == "Driver"}.user
	end

	def driver_name
		self.driver.name
	end

	def passengers
		self.user_trips.select{|ut, role| ut.role == "Passenger"}.map{|p| p.user}
	end
end
