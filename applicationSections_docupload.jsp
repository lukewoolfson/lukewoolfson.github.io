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
				 com.ezgov.legalservices.ccms.session.CcmsUserSettings,
				 com.ezgov.legalservices.ccms.model.Application" %>
<%
	InteractionData data = (InteractionData)request.getAttribute(CcmsConstants.INTERACTION_DATA_KEY);
	String meansIFrameStyleURL = (String)data.getAttribute("MEANS_IFRAME");
	String meritsIFrameStyleURL = (String)data.getAttribute("MERITS_IFRAME");
	
	String pageName = (String)request.getAttribute(WebRequest.PAGE_NAME_KEY);
	String uniqueId = (String)data.getHiddenDataOutgoing(VisitedPage.UNIQUE_ID_KEY);	
	
	Application app = null;
	try	{
	    app = (Application) data.getRootDomainObject(CcmsConstants.MODEL_KEY_APPLICATION);
	} catch (Exception e) {
	    // Ignore - app object will stay null
	}
	
	String caseId = app.getLscCaseReference();
	String providerId = app.getProviderId();
	
	UserSettings settings = (UserSettings) data.getCRO(UserSettings.CRO_KEY);
	CcmsUserSettings ccmsUserSettings = (CcmsUserSettings) data.getCRO(UserSettings.CRO_KEY);
	String loc = settings.getLocale().getLanguage();
	CcmsUser user = ccmsUserSettings.getCcmsUser();
	
	boolean meansComplete = false;
	boolean meritsComplete = false;
	
%>

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
<!-- Document upload tool tip -->
<script src="/js/opentip-jquery-excanvas.min.js"></script> 
<link href="/css/opentip.css" rel="stylesheet" type="text/css"/>
<script>
$(function() {
    $("#doc-tip").opentip("If you have <strong>all</strong> your documents ready to upload.<p>Otherwise complete the application and you will receive a notification to upload your files at a later date.</p>", { 
        delay: 0.2, 
        borderRadius: 3, 
        borderColor: "#FFBF47", 
        background: "#fff6e5", 
        background: "#fff6e5", 
        fixed: true, 
        stem: true, 
        tipJoint: "top left",
        targetJoint: "bottom",
        target: true,
        stemLength: 10,
        stemBase: 10,
        showEffectDuration: 0.1
    });
});        
          
</script>
<style> #opentip-1 {left: 175px!important;} </style>
<!-- tool tip end -->
    
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
	        	   if("Complete".equalsIgnoreCase(section.getStatus())){
	        		   meritsComplete = true;
	        	   }	        	   
		       } else if (section.isMeansAssessment()) {
		     	   if("Complete".equalsIgnoreCase(section.getStatus())){
		    		   meansComplete = true;
		    	   }
			   } %>
		<td><a href="<%= href %>"><%= section.getSectionName() %></a></td>
		<% } else { %>
		<td><%= section.getSectionName() %></td>
		<% } %>

		<td><%= section.getStatus() %></td>
		<td><%= section.getFormattedLastSaved() %></td>
		<td><%= section.getSavedBy() %></td>
	</tr>
	<% } %>
	<c:set var="varUniqueId"><%=uniqueId%></c:set>
	<c:set var="varCaseId"><%=caseId%></c:set>
	<c:set var="varProviderId" value="<%= ccmsUserSettings.getCcmsUser().getProvider().getId() %>"/>
	<!-- COMMENTED OUT FOR TESTING -->
	<%-- <% if(meritsComplete && meansComplete) { %> --%>
	<tr>
	   	<td>
            <a href="<c:url value="/evidenceUpload.do?ezgov_private_hiddenData_uniqueId=${varUniqueId}&amp;caseID=${varCaseId}&amp;provideID=${varProviderId}" />">Document Upload</a>
            <img id="doc-tip" src="images/icon_csh.gif" class="cshIcon" alt="Document Upload Help">
            <span class="new-flag">NEW</span>
        </td>
		<td><!-- STATUS --></td>
		<td><!-- LAST SAVED --></td>
		<td><!-- SAVED BY --></td>
	</tr>
	<%-- <% } %> --%>
</table>
</fmt:bundle>