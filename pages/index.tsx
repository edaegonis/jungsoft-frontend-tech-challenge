import SubscriptionPlans from "../components/SubscriptionPlans/SubscriptionPlans"
import { withApollo } from "../lib/apollo"

export default withApollo({ ssr: true })(SubscriptionPlans)
