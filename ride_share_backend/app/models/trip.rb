class Trip < ApplicationRecord
	has_many :user_trips
	has_many :users, through: :user_trips

	def driver
		if self.user_trips.find{|ut, role| ut.role == "Driver"}
			return self.user_trips.find{|ut, role| ut.role == "Driver"}.user
		end
		''
	end

	def driver_name
		self.driver.name
	end

	def passengers
		if self.user_trips.select{|ut, role| ut.role == "Passenger"}
			return self.user_trips.select{|ut, role| ut.role == "Passenger"}.map{|p| p.user}
		end
		[]
	end
end
