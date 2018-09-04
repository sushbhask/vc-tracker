Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  # queries are just represented as fields
  field :allInvestors, !types[Types::InvestorType] do
    # resolve would be called in order to fetch data for that field
    resolve -> (obj, args, ctx) { Investor.all }
  end
end
