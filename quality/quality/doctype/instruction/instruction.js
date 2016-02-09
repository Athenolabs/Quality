frappe.ui.form.on("Instruction", {
	refresh: function(frm) {
		if(frm.doc.__islocal) {
			frm.events.set_editable(frm, true);
		} else {
			if(!frm.doc.content) {
				frm.doc.content = "<span></span>";
			}

			// toggle edit
			frm.add_custom_button("Edit", function() {
				frm.events.set_editable(frm, !frm.is_note_editable);
			})
			frm.events.set_editable(frm, false);
		}
	},
	set_editable: function(frm, editable) {
		// hide all fields other than content

		// no permission
		if(editable && !frm.perm[0].write) return;

		// content read_only
		frm.set_df_property("content", "read_only", editable ? 0: 1);
		frm.set_df_property("company", "read_only", editable ? 0: 1);
		frm.set_df_property("department", "read_only", editable ? 0: 1);
		frm.set_df_property("valid_through", "read_only", editable ? 0: 1);

		// hide all other fields
		$.each(frm.fields_dict, function(fieldname, field) {

			if(fieldname !== "content" && fieldname !== "company" && fieldname !=="department" && fieldname !=="valid_through" 
				&& fieldname !=="status" && !in_list(["Section Break", "Column Break"], field.df.fieldtype)) {
					frm.set_df_property(fieldname, "hidden", editable ? 0: 1);
				}

		})

		// no label, description for content either
		frm.get_field("content").toggle_label(editable);
		frm.get_field("content").toggle_description(editable);
		
		// set flag for toggle
		frm.is_note_editable = editable;
	}
});
