class UserController < ApplicationController
	skip_before_action :authorized, only: [:create]

	def create
    byebug
		user = User.new(
      email: params[:email], 
      name: params[:name].join(" "),
      password: params[:password])
    if user.save
      token = encode_token({ user_id: user.id})
      render json: {user: user, jwt: token}
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
