class Trip < ApplicationRecord
	belongs_to :driver, :class_name => 'User'
	belongs_to :vehicle
	has_many :rides
	has_many :reviews, :foreign_key => 'ride_id'
	has_many :passengers, through: :rides
end
