class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      token = encode_token({ user_id: user.id})
      render json: { 
        user: {
          id: user.id, 
          email: user.email, 
          name: user.name, 
          createdAt: user.created_at, 
          updatedAt: user.updated_at
        }, 
        jwt: token
      }
     else
     	render json: { message: "error: bad user params"}
    end
  end

end