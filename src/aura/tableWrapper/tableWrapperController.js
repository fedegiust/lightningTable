({
	init : function(component, event, helper) {
        var headers = [{"label": "column A", "center": false},
                       {"label": "column B", "center": true},
                       {"label": "column C", "center": false},
                       {"label": "column D", "center": false}];
        var data = [[{"label": "columna A", "value": "123", "center": false},
                     {"label": "columna B", "value": "456", "center": true},
                     {"label": "columna C", "value": "789", "center": false},
                     {"label": "columna D", "value": "012", "center": false}],
                    [{"label": "columna A", "value": "123", "center": false},
                     {"label": "columna B", "value": "456", "center": false},
                     {"label": "columna C", "value": "789", "center": false},
                     {"label": "columna D", "value": "012", "center": false}],
                    [{"label": "columna A", "value": "123", "center": false},
                     {"label": "columna B", "value": "456", "center": false},
                     {"label": "columna C", "value": "789", "center": false},
                     {"label": "columna D", "value": "012", "center": false}],
                    [{"label": "columna A", "value": "123", "center": false},
                     {"label": "columna B", "value": "456", "center": false},
                     {"label": "columna C", "value": "789", "center": false},
                     {"label": "columna D", "value": "012", "center": false}],
                    [{"label": "columna A", "value": "123", "center": false},
                     {"label": "columna B", "value": "456", "center": false},
                     {"label": "columna C", "value": "789", "center": false},
                     {"label": "columna D", "value": "012", "center": false}],                    
                   ];

		component.set("v.headers", headers);
        component.set("v.data", data);
	}
})