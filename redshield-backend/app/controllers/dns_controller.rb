class DnsController < ApplicationController
  before_action :set_dn, only: %i[ show update destroy ]

  # GET /dns
  def index
    @dns = Dn.all

    render json: @dns
  end

  # GET /dns/1
  def show
    render json: @dn
  end

  # POST /dns
  def create
    @dn = Dn.new(dn_params)

    if @dn.save
      render json: @dn, status: :created, location: @dn
    else
      render json: @dn.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dns/1
  def update
    if @dn.update(dn_params)
      render json: @dn
    else
      render json: @dn.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dns/1
  def destroy
    @dn.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dn
      @dn = Dn.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dn_params
      params.require(:dn).permit(:client_id, :origin_server_group_id, :name, :type, :ip_address)
    end
end
