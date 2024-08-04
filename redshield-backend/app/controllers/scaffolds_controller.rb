class ScaffoldsController < ApplicationController
  before_action :set_scaffold, only: %i[ show update destroy ]

  # GET /scaffolds
  def index
    @scaffolds = Scaffold.all

    render json: @scaffolds
  end

  # GET /scaffolds/1
  def show
    render json: @scaffold
  end

  # POST /scaffolds
  def create
    @scaffold = Scaffold.new(scaffold_params)

    if @scaffold.save
      render json: @scaffold, status: :created, location: @scaffold
    else
      render json: @scaffold.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /scaffolds/1
  def update
    if @scaffold.update(scaffold_params)
      render json: @scaffold
    else
      render json: @scaffold.errors, status: :unprocessable_entity
    end
  end

  # DELETE /scaffolds/1
  def destroy
    @scaffold.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_scaffold
      @scaffold = Scaffold.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def scaffold_params
      params.require(:scaffold).permit(:client_id, :origin_server_group_id, :name, :type, :ip_address)
    end
end
