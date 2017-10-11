class User < ApplicationRecord
	has_secure_password
	has_many :trips, :foreign_key => 'driver_id'
	has_many :rides, :foreign_key => 'trip_id'
	has_many :reviews, :foreign_key => 'passenger_id'
	has_many :trips, :foreign_key => 'passenger_id', :class_name => 'Reservation'
end
