module.exports = function(grunt){
	// Set up the configuraton object.
	var config = {};

	// All tasks that must be loaded.
	var tasks = [
		 "grunt-contrib-watch"
		, "grunt-contrib-concat"
		, "grunt-contrib-uglify"
		, "grunt-contrib-sass"
	];

	// Concat ===========================================================
	var concat;
	config.concat = concat = {};

	concat.dev = {
		files: {
					"assets/javascripts/myapp.dev.js": [
					"assets/javascripts/jquery.js"
				,	"assets/javascripts/selectivizr.js"
				,	"assets/javascripts/modernizr.js"					
				, "assets/javascripts/scripts.js"
				, "assets/javascripts/scripts.js"
			]
		}
	};


	// Uglify ===========================================================
	config.uglify = {dist: {
		options: {
			sourceMap: true,
      sourceMapName: "assets/javascripts/myapp.map"
		},
		files: {
			"assets/javascripts/myapp.dist.js": ["assets/javascripts/myapp.dev.js"]
		}
	}}

	// Sass =============================================================
	var sass;
	config.sass = sass = {};

	sass.dist = {
			options: {style: "compressed"}
		, files: {
			"assets/stylesheets/style.dist.css": "assets/scss/style.scss"
		}
	};

	sass.dev = {
			options: {style: "expanded", lineNumber: true}
		, files: {
			"assets/stylesheets/style.dev.css": "assets/scss/style.scss"
		}
	};


	// Watch ============================================================
	config.watch = {
		scripts: {
				files: ["assets/scss/**/*.scss", "assets/javascripts/**/*.js"]
			,	tasks: ["dev"]
		}, 
		options: {
			livereload: true
		}
	};

	// Register custom tasks ============================================
	grunt.registerTask("default", ["dev"]);
	grunt.registerTask("dev", ["concat:dev", "sass:dev"]);
	grunt.registerTask("dist", ["concat:dev", "uglify", "sass"]);

	// General setup ====================================================
	grunt.initConfig(config);
	tasks.forEach(grunt.loadNpmTasks);
};