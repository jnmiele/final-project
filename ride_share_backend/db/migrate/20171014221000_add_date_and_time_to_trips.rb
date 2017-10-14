class AddDateAndTimeToTrips < ActiveRecord::Migration[5.1]
  def change
    add_column :trips, :date, :string
    add_column :trips, :time, :string
  end
end
