class TierOnesController < ApplicationController
  before_action :set_tier_one, only: %i[ show update destroy ]

  # GET /tier_ones
  def index
    @tier_ones = TierOne.where(client_id: virtual_server_params[:client_id], content_route_id: virtual_server_params[:content_route_id])

    render json: @tier_ones
  end

  # GET /tier_ones/1
  def show
    render json: @tier_one
  end

  # POST /tier_ones
  def create
    @tier_one = TierOne.new(tier_one_params)

    if @tier_one.save
      render json: @tier_one, status: :created, location: @tier_one
    else
      render json: @tier_one.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tier_ones/1
  def update
    if @tier_one.update(tier_one_params)
      render json: @tier_one
    else
      render json: @tier_one.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tier_ones/1
  def destroy
    @tier_one.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tier_one
      @tier_one = TierOne.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tier_one_params
      params.permit(:name, :cluster, :ip, :port, :terminator, :traffic_type, :client_id, :content_route_id)
    end
end
