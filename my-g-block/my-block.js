wp.blocks.registerBlockType('brad/border-box', {
	title: 'My G Block',
	icon: 'awards',
	category: 'common',
	attributes: {
		content: {type: 'string'},
		url: {type: 'string'},
		color: {type: 'string'},
	},
	supports: {
		align: true,
		alignWide: false,
		customClassName: false,
	},
	edit: function(props) {
		function updateContent(event) {
			props.setAttributes({content: event.target.value})
		}
		
		function updateColor(value) {
			props.setAttributes({color: value.hex})
		}

		function updateUrl(event) {
			props.setAttributes({url: event.target.value})
		}
		
		return wp.element.createElement(
			"div",
			null,
			wp.element.createElement(
				  "a",
				  null,
				  "Button Name",
			),
			wp.element.createElement("input", { type: "text",value: props.attributes.content, onChange: updateContent }),
			wp.element.createElement("input", { type: "text",placeholder: "URL", onChange: updateUrl }),
			wp.element.createElement(wp.components.ColorPicker, { color: props.attributes.color, onChangeComplete: updateColor ,})
		);
	},
	save: function(props) {
		return wp.element.createElement(
			"a",
			{ style: { color: props.attributes.color },href : props.attributes.url ,target:"_blank"},
			props.attributes.content
		);
	}
})