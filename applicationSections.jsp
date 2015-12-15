<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jstl/fmt" prefix="fmt" %>
<%@ page import="java.lang.String,
                 com.ezgov.legalservices.ccms.CcmsConstants,
                 com.ezgov.roof.controller.yaim.data.InteractionData,
                 com.ezgov.roof.controller.yaim.data.BaseInteractionData,
                 com.ezgov.roof.controller.yaim.backbutton.VisitedPage,
                 com.ezgov.legalservices.ccms.view.viewbeans.CA01View,
                 com.ezgov.legalservices.ccms.view.viewbeans.SectionSummaryView,
				 java.util.Locale,
				 com.ezgov.roof.controller.web.request.WebRequest,
				 com.ezgov.roof.session.UserSettings,
				 com.ezgov.legalservices.ccms.model.CcmsUser,
				 com.ezgov.legalservices.ccms.session.CcmsUserSettings" %>
<%
	InteractionData data = (InteractionData)request.getAttribute(CcmsConstants.INTERACTION_DATA_KEY);
	String meansIFrameStyleURL = (String)data.getAttribute("MEANS_IFRAME");
	String meritsIFrameStyleURL = (String)data.getAttribute("MERITS_IFRAME");
	
	String pageName = (String)request.getAttribute(WebRequest.PAGE_NAME_KEY);
	String uniqueId = (String)data.getHiddenDataOutgoing(VisitedPage.UNIQUE_ID_KEY);	
	
	UserSettings settings = (UserSettings) data.getCRO(UserSettings.CRO_KEY);
	CcmsUserSettings ccmsUserSettings = (CcmsUserSettings) data.getCRO(UserSettings.CRO_KEY);
	String loc = settings.getLocale().getLanguage();
	CcmsUser user = ccmsUserSettings.getCcmsUser();
	
%>

<link href="<c:url value="/css/jquery-ui.css" />" rel="stylesheet" />
<script type="text/javascript" src="<c:url value="/js/jquery-ui.min.js"/>"></script>

<c:set var="localeString" value="<%= loc %>"/>
<c:if test="${localeString == 'en'}" >
	<fmt:setLocale value="en"/>
</c:if> 
<c:if test="${localeString == 'cy'}" >
	<fmt:setLocale value="cy"/>
</c:if> 
<fmt:bundle basename="com.ezgov.roof.Text"><jsp:useBean class="com.ezgov.legalservices.ccms.view.viewbeans.CA01View" id="CA01VIEW" scope="request" />
<script type="text/javascript">
				if (top.location.href != self.location.href)
					top.location.href = self.location.href;
</script>
<script type="text/javascript">
	$(function(){
		$("tr").tooltip();
	});
</script>
<style>
	label{
		diplay : inline-block;
		width : 5em;
		background-color : green;
	}
</style>
<table class="applicationsections" summary="<fmt:message key="PUI_ContentID_109" />">
	<tr class="theader">
		<th><fmt:message key="PUI_ContentID_150" /></th>
		<th><fmt:message key="PUI_ContentID_74" /></th>
		<th><fmt:message key="PUI_ContentID_148" /></th>
		<th><fmt:message key="PUI_ContentID_149" /></th>
	</tr>
	<% for(SectionSummaryView section : CA01VIEW.getLocalizedSections())
	{
	    String href= CA01VIEW.getActionHref( section.getAction(), false, false, section.isNew() ? "%23new%3Dtrue" : "");
	%>
	<% 
	    String contextPath = request.getContextPath();
	    String iFrameUrl = contextPath + "/renderOWD.do?ezgov_private_hiddenData_uniqueId="+uniqueId;
	%>
	<tr>
	    <% if (section.isEnabled()) {
	           if (section.isMeritsAssessment()) {
	        	   iFrameUrl = iFrameUrl.concat("&amp;assessmentType=merits");	
	        	   if ("TRUE".equalsIgnoreCase(meritsIFrameStyleURL)) {
	    %>
		<td><a href="<%=iFrameUrl%>"><%= section.getSectionName() %></a> <div class="beta-logo">BETA</div></td>
		<% 			}else { %>
		<td><a href="<%= href %>"><%= section.getSectionName() %></a></td>
		<% 			} %>
		<%     }else if (section.isMeansAssessment()) {
				   iFrameUrl = iFrameUrl.concat("&amp;assessmentType=means");
				   if ("TRUE".equalsIgnoreCase(meansIFrameStyleURL)) {
		%>
		<td><%= section.getSectionName() %> : <a href="<%= href %>" title="<fmt:message key="applicationSections.means.classic.desc" />">Non-Passported</a> | <a href="<%=iFrameUrl%>" title="<fmt:message key="applicationSections.means.beta.desc" />">Passported </a>&nbsp;<div class="beta-logo">BETA</div></td>
		<% 			}else { %>
		<td><a href="<%= href %>"><%= section.getSectionName() %></a></td>
		<% 			} %>
		<%     } else { %>
		<td><a href="<%= href %>"><%= section.getSectionName() %></a></td>
		<%     } 
	       } else { %>
		<td><%= section.getSectionName() %></td>
		<% } %>

		<td><%= section.getStatus() %></td>
		<td><%= section.getFormattedLastSaved() %></td>
		<td><%= section.getSavedBy() %></td>
	</tr>
	<% } %>
</table>
</fmt:bundle>