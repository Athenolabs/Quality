frappe.listview_settings['Customer Delighted or Disappointed'] = {
	add_fields: ["name", "reason", "customer"],
	get_indicator: function(doc) {
		if(doc.reason == "Customer Disappointed") {
			return [__("Customer Disappointed"), "red", "reason,=,Customer Dissapointed"];
		} else {//if(flt(doc.outstanding_amount)==0) {
			return [__("Customer Delighted"), "green", "reason,=,Customer Delighted"]

		}
	},
	right_column: "customer"
};