class OriginServerGroupsController < ApplicationController
  before_action :set_origin_server_group, only: %i[ show update destroy ]

  # GET /origin_server_groups
  def index
    @origin_server_groups = OriginServerGroup.where(client_id: origin_server_group_params[:client_id], content_route_id: params[:content_route_id])

    render json: @origin_server_groups
  end

  # GET /origin_server_groups/1
  def show
    render json: @origin_server_group
  end

  # POST /origin_server_groups
  def create
    @origin_server_group = OriginServerGroup.new(origin_server_group_params)

    if @origin_server_group.save
      render json: @origin_server_group, status: :created, location: @origin_server_group
    else
      render json: @origin_server_group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /origin_server_groups/1
  def update
    if @origin_server_group.update(origin_server_group_params)
      render json: @origin_server_group
    else
      render json: @origin_server_group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /origin_server_groups/1
  def destroy
    @origin_server_group.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_origin_server_group
      @origin_server_group = OriginServerGroup.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def origin_server_group_params
      params.permit(:client_id, :content_route_id)
    end
end
