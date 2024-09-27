$(function()
{
	var siteName = "eChalk";
	var siteDisplayLink = "www.eChalk.co.uk";
	var siteHref = "http://www.echalk.co.uk";
	
	if (window.location.host.indexOf("lumpty") != -1)
	{
		siteName = "Lumpty";
		siteDisplayLink = "www.lumpty.com";
		siteHref = "http://www.lumpty.com";
	}
	
	// Cater for new and legacy by looking for siteLink both class and id
	$('a#siteLink, a.siteLink').attr('href', siteHref);
	$('#siteLink, .siteLink').text(siteDisplayLink);
	
	$('.siteName').text(siteName);
	
	// Set image alts to site name
	$('img.siteLogoImage').attr('alt', siteName);
});