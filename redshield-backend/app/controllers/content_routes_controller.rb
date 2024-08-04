class ContentRoutesController < ApplicationController
  before_action :set_content_route, only: %i[ show update destroy ]

  # GET /content_routes
  def index
    @content_routes = ContentRoute.all

    render json: @content_routes
  end

  # GET /content_routes/1
  def show
    render json: @content_route
  end

  # POST /content_routes
  def create
    @content_route = ContentRoute.new(content_route_params)

    if @content_route.save
      render json: @content_route, status: :created, location: @content_route
    else
      render json: @content_route.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /content_routes/1
  def update
    if @content_route.update(content_route_params)
      render json: @content_route
    else
      render json: @content_route.errors, status: :unprocessable_entity
    end
  end

  # DELETE /content_routes/1
  def destroy
    @content_route.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_content_route
      @content_route = ContentRoute.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def content_route_params
      params.require(:content_route).permit(:name, :service_reference, :host_names, :pops, :spec, :locked)
    end
end
