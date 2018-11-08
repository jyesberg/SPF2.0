# SPF2.0 #
Squiz Matrix SPF2 template for ACT Government websites

Refer to https://actgovproject.bitbucket.io/?p=all for a full list of elements and how they look and function.

Current version is 2.0.7

## Steps to setup a new SPF2 site in Matrix ##
If setting SPF2 up on an already existing site some of these steps can be skipped.

1.	create site asset
2.	go to URLs page of site asset and enter in the URL
3.	create home page
4.	set homepage on site asset, set the 404/archived to your chosen 404 page as well (create or clone if there isn't one)
5.	apply metadata schema #1121612 to the site asset
6.	create designs folder (type 2)
7.	create parse file called ‘Site name SPF2.0.version number’
8.	on the details screen of the parse file change ‘No frames in Simple Edit Interface’ to Yes
9.	copy  and paste parse file contents from https://github.com/jyesberg/SPF2.0/blob/master/Squiz%20Matrix%20design%20asset into your new parse file
10.	create a customisation of the design and title it with 'Site Name SPF 2 - Master' where Site Name is the name of the site asset and customise the following:
	1.	global_links (set links for things like copyright, accessibility, contact us etc as well as GA code) 
	2.	template_options (set colour of breadcrumbs_banner and content column size, set middlecolumn to 'col-md-8 spf-page-content--right')
	3.	additional_javascript (only if you have additional javascript)
	4.	edit_plus_nested_content (nest #276760 in here)
	5.	footer_logos (nest #1124309 in here)
	6.	nested_css_references (only if you have additional CSS)
		1.	Create a CSS file asset under your parse file called ‘site-custom’ e.g. ‘cmtedd-custom’
		2.	Create a folder under your SPF2 design folder called ‘Nested content’
		3.	Create a standard page under your Nested content folder called css references
		4.	Change the content type to raw html
		5.	Add your reference to your custom css file e.g. <link rel="stylesheet" type="text/css" href="./?a=asset number goes here">
	7.	banner_image (nest #1120824 in here, only required if you're using an image banner somewhere, usually home page, note this requires step 5 to work)
11.	create a customisation of the master customisation and title it 'Site Name SPF 2 - Home' and customise the following:  
	1.	breadcrumbs_banner (set print to no)
	2.	template_options (set the home page width to 'col-md-10 col-md-offset-1')
	3.	left_nav (set to hide)
12.	create a customisation of the master customisation and title it 'Site Name SPF 2 – No left nav' and customise the following:  
	1.	template_options (set the home page width to 'col-md-10 col-md-offset-1')
	2.	left_nav (set to hide)
13.	apply the master customisation to the site asset, apply the home customisation as an override to the home page asset
14.	Request that the OST adds the domain of your website to the designs folder to avoid any cross-domain HTTPS issues.

