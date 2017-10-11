class Vehicle < ApplicationRecord
	belongs_to :driver, :class_name => 'User'
	has_many :rides
	has_many :passengers, through: :rides
end
