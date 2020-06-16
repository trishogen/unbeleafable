class GroupSerializer

  def initialize(group_object)
    @group = group_object
  end

  def to_serialized_json
    options = {
      except: [:updated_at, :created_at],
    }
    @group.to_json(options)
  end

end
