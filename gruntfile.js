module.exports 							= function(grunt) {
	grunt.initConfig({
		crx: 							{
			zip: 						{
				src: 					"dist/debug/**/*",
				dest: 					"dist/release/BetterStreamCraft.zip"
			}
		},
		browserify: 					{
			vendor: 					{
				files: 					{
					"tmp/vendor.browserify.js": ["src/js/vendor.js"]
				},
				options: 				{
					shim: 				{
						bootstrap: 		{
							depends: 	{
								jquery: "$"
							}
						}
					}
				}
			},
			frontend: 					{
				files: 					{
					"tmp/frontend.browserify.js": 	["tmp/frontend.browserify.js"]
				},
				options: 				{
					transform: 			["browserify-ejs-tran"]
				}
			},
			backend: 					{
				files: 					{
					"tmp/backend.browserify.js": 	["tmp/backend.browserify.js"]
				},
				options: 				{
					transform: 			["browserify-ejs-tran"]
				}
			}
		},
		watch: 							{
			css: 						{
				files: 					"src/css/**/*.css",
				tasks: 					["build-css"],
			},
			js: 						{
				files: 					["src/**/*.js", "src/frontend/**/*.ejs", "src/frontend/*.ejs", "src/static/*.*"],
				tasks: 					["build-js"],
			},
			options: 					{
				livereload: 			9090
			}
		},
		uglify: 						{
			backend: 					{
				src: 					"dist/debug/src/backend.js",
				dest: 					"dist/debug/src/backend.js"
			},
			frontend: 					{
				src: 					"dist/debug/src/frontend.js",
				dest: 					"dist/debug/src/frontend.js"
			}
		},
		concat: 						{
			// All files
			all: 						{
				src: 					["tmp/vendor.browserify.js", "tmp/frontend.browserify.js"],
				dest: 					"dist/debug/src/frontend.js",
				options: 				{
					separator: 			";\n"
				}
			},
			// All files
			allb: 						{
				src: 					["tmp/backend.browserify.js"],
				dest: 					"dist/debug/src/backend.js",
				options: 				{
					separator: 			";\n"
				}
			},
			// App frontend
			frontend: 					{
				src: 					["src/js/frontend/**/*.js"],
				dest: 					"tmp/frontend.browserify.js"
			},
			// App backend
			backend: 					{
				src: 					["src/js/backend/**/*.js"],
				dest: 					"tmp/backend.browserify.js"
			},
			// Main file
			index: 						{
				src: 					["src/js/src/frontend.js", "tmp/frontend.browserify.js"],
				dest: 					"tmp/frontend.browserify.js"
			}
		},
		cssmin: 						{
			target: 					{
				files: 					[{
					src: 				["src/css/**/*.css"],
					dest: 				"dist/debug/src/frontend.css",
				}]
			}
		},
		copy: 							{
			ejs: 						{
				files: 					[{
					cwd: 				"src/views",
					src: 				"**",
					dest: 				"tmp/views/",
					expand: 			true
				}]
			},
			static: 					{
				files: 					[{
					cwd: 				"src/static",
					src: 				"**",
					dest: 				"dist/debug/static/",
					expand: 			true
				}]
			}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-crx");

	grunt.registerTask("build", ["build-css", "build-js"]);
	grunt.registerTask("default", ["build", "watch"]);
	grunt.registerTask("dist", ["build", "uglify", "crx"]);

	grunt.registerTask("build-css", ["cssmin"]);

	grunt.registerTask("build-js", function() {
		const tasks 					= ["concat:frontend", "concat:index", "concat:backend", "copy", "browserify", "concat:all", "concat:allb"];

		if (grunt.cli.tasks.indexOf("dist") > -1) {
			grunt.config.data.browserify.frontend.options.transform.push(["babelify", { presets: ["@babel/preset-env"] }]);
			grunt.config.data.browserify.backend.options.transform.push(["babelify", { presets: ["@babel/preset-env"] }]);

			// Remove debug files
			grunt.config.data.concat.frontend.src.push("!**/*debug.js");
		}

		grunt.task.run(tasks);
	});
};