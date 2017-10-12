class UsersController < ApplicationController
	skip_before_action :authorized, only: [:create]

	def create
	  user = User.new(
      email: params[:email], 
      name: params[:name].join(" "),
      password: params[:password])
    if user.save
      token = encode_token({ user_id: user.id})
      render json: {user_id: user.id, user_name: user.name, jwt: token}
    else
    	render json: { message: "Error"}
    end
	end

  def show
    @user = User.find(params[:id])
    if @user
      render json: @user
    else
      render json: { message: "Error"}
    end
  end

end
