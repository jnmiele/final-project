class AddConfirmedToUserTrips < ActiveRecord::Migration[5.1]
  def change
    add_column :user_trips, :confirmed, :boolean, default: false
  end
end
