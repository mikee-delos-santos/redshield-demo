class VirtualServersController < ApplicationController
  before_action :set_virtual_server, only: %i[ show update destroy ]

  # GET /virtual_servers
  def index
    @virtual_servers = VirtualServer.all

    render json: @virtual_servers
  end

  # GET /virtual_servers/1
  def show
    render json: @virtual_server
  end

  # POST /virtual_servers
  def create
    @virtual_server = VirtualServer.new(virtual_server_params)

    if @virtual_server.save
      render json: @virtual_server, status: :created, location: @virtual_server
    else
      render json: @virtual_server.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /virtual_servers/1
  def update
    if @virtual_server.update(virtual_server_params)
      render json: @virtual_server
    else
      render json: @virtual_server.errors, status: :unprocessable_entity
    end
  end

  # DELETE /virtual_servers/1
  def destroy
    @virtual_server.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_virtual_server
      @virtual_server = VirtualServer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def virtual_server_params
      params.require(:virtual_server).permit(:client_id, :cluster, :ports, :ip, :vs_name, :terminator_typ, :traffic_type)
    end
end
