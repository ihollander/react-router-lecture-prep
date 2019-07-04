class Api::V1::CustomersController < ApplicationController

  def show
    customer = Customer.find_by(id: params[:id])
    if customer
      render json: customer
    else
      render status: :not_found
    end
  end

  def index
    customers = Customer.all

    render json: customers
  end
end
