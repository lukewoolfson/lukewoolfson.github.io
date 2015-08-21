<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page import="java.lang.String,
				 java.util.Locale,
                 com.ezgov.legalservices.ccms.CcmsConstants,
                 com.ezgov.legalservices.ccms.model.CcmsUser,
				 com.ezgov.legalservices.ccms.model.UserFirm,
                 com.ezgov.legalservices.ccms.controller.prepare.LoadExternalLinks,
                 com.ezgov.roof.controller.yaim.data.InteractionData,
                 com.ezgov.roof.controller.yaim.data.BaseInteractionData,
                 com.ezgov.roof.controller.yaim.backbutton.VisitedPage,
				 com.ezgov.roof.controller.web.request.WebRequest,
                 com.ezgov.roof.session.UserSettings,
                 com.ezgov.legalservices.ccms.session.CcmsUserSettings,
                 java.util.List" %>
<%
	InteractionData data = (InteractionData)request.getAttribute(CcmsConstants.INTERACTION_DATA_KEY);
	CcmsUserSettings settings = null;
	if(data != null)
	{
		settings = (CcmsUserSettings) data.getCRO(UserSettings.CRO_KEY);
		CcmsUser user = settings.getCcmsUser();
		List<UserFirm> userFirmList = user.getUserFirmList();
%>


		<c:set var="pageNameString" value="<%=request.getAttribute(WebRequest.PAGE_NAME_KEY) %>"/>
		<c:set var="uniqueId" value="<%=data.getHiddenDataOutgoing(VisitedPage.UNIQUE_ID_KEY) %>"/>
	 	<c:set var="uniqueId" value="ezgov_private_hiddenData_uniqueId%3D${uniqueId}%23"/>             
		<c:set var="localeString" value="<%= settings.getLocale().getLanguage() %>"/>
		<c:set var="userName" value="<%= settings.getCcmsUser().getName() %>"/>
		<c:set var="providerName" value="<%= settings.getCcmsUser().getProvider().getName() %>"/>
		<c:set var="providerId" value="<%= settings.getCcmsUser().getProvider().getId() %>"/>
		<c:set var="accessibilityLink" value="<%= data.getCRO(LoadExternalLinks.ACCESSIBILITY_LINK) %>"/>
		<c:set var="helpLink" value="<%= data.getCRO(LoadExternalLinks.HELP_LINK) %>"/>
		<c:set var="lscDetailsLink" value="<%= data.getCRO(LoadExternalLinks.LSC_DETAILS_LINK) %>"/>
		<c:set var="laaLogoLink" value="<%= data.getCRO(LoadExternalLinks.LAA_LOGO_LINK) %>"/>
		<c:set var="userFirmListSize" value="<%= settings.getCcmsUser().getUserFirmList().size() %>"/>
<%
	}
	else
	{
%>


<%
	}
%>

<fmt:setLocale value="${localeString}" />
<fmt:bundle basename="com.ezgov.roof.Text">
<div class="ccmsPageHeader">
	<div class="ccmsPageHeaderLogo">
		<a href="${laaLogoLink}" target="_blank">
			<img width="421" height="100" title="Link to LAA home page" alt="Link to LAA home page" src="images/logo.gif" />
		</a> 
	</div>
	<div class="ccmsPageHeaderLinks">
		<a href="${lscDetailsLink}" target="_blank"><fmt:message key="PUI_ContentID_313"/></a> 
		| 
		<a href="${accessibilityLink}" target="_blank"><fmt:message key="PUI_ContentID_314" /></a> 
		|
		<a href="${helpLink}<c:out value="${pageNameString}" />" target="_blank"><fmt:message key="PUI_ContentID_315" /></a> 
	</div>
</div>
<div class="ccmsPageNavigation">
	<ul class="menuItems">
<c:choose>
	<c:when test="${pageNameString=='CCMS_AH01'}" >
		<li id="menuItem1" class="active">
	</c:when> 
	<c:otherwise>
		<li id="menuItem1">
	</c:otherwise> 
</c:choose>
			<a href="${pageNameString}.form?RoofAction_action%3Dgoto%23save%3Dfalse%23validate%3Dfalse%23${uniqueId}destination%3Dhome" accesskey="1"><fmt:message key="link_menuHome" /></a>
			<div id="menuItemTop1" class="menuItemTop1">&nbsp;</div>
		</li>
<c:choose>
	<c:when test="${pageNameString != 'CCMS_AH01' && pageNameString != 'applicationError' && pageNameString != 'sessionTimeout' && fn:startsWith(pageNameString, 'CCMS_NOT')==false && fn:startsWith(pageNameString, 'CCMS_PD')==false}" >
		<li id="menuItem2" class="active">
	</c:when> 
	<c:otherwise>
		<li id="menuItem2">
	</c:otherwise> 
</c:choose>
		    <a href="${pageNameString}.form?RoofAction_action%3Dgoto%23save%3Dfalse%23validate%3Dfalse%23${uniqueId}destination%3Dyca" accesskey="2"><fmt:message key="link_menuYourCases" /></a>
			<div id="menuItemTop2" class="menuItemTop2">&nbsp;</div>
		</li>
<c:choose>
	<c:when test="${fn:startsWith(pageNameString, 'CCMS_NOT')==true || fn:startsWith(pageNameString, 'CCMS_PD')==true}" >
		<li id="menuItem3" class="active">
	</c:when> 
	<c:otherwise>
		<li id="menuItem3">
	</c:otherwise> 
</c:choose>
			<a href="${pageNameString}.form?RoofAction_action%3Dgoto%23save%3Dfalse%23validate%3Dfalse%23${uniqueId}destination%3Dnot%23typeOfSearch%3DyourSearch" accesskey="3"><fmt:message key="link_menuYourNotifications" /></a>
			<div id="menuItemTop3" class="menuItemTop3">&nbsp;</div>
		</li>
<c:choose>
	<c:when test="${pageNameString == 'sessionTimeout'}" >
		<li id="menuItem4" class="active">
	</c:when> 
	<c:otherwise>
		<li id="menuItem4">
	</c:otherwise> 
</c:choose> 
			<!-- a href="${pageNameString}.form?RoofAction_action%3Dgoto%23save%3Dfalse%23validate%3Dfalse%23ezgov_private_hiddenData_uniqueId%3D${uniqueId}%23destination%3Dlogout" accesskey="5" title=""><fmt:message key="link_menuLogout" /></a -->
			<a href="${pageNameString}.form?RoofAction_action%3Dgoto%23save%3Dfalse%23validate%3Dfalse%23${uniqueId}destination%3Dlogout"><fmt:message key="link_menuLogout" /></a>
			<div id="menuItemTop5" class="menuItemTop4">&nbsp;</div>
		</li>
	</ul>
</div>

<c:choose>
  <c:when  test="${pageNameString == 'CCMS_AH01'}" >
     <div class="ccmsUserInfo">
	    <c:if test="${userName != null}" >
		   <fmt:message key="PUI_ContentID_902" /><span class="strong">${userName}</span><br/>
	       <fmt:message key="PUI_ContentID_1051" /> 
	       <c:if test="${userFirmListSize <= 1}" ><span class="strong">
	       <c:out value="${providerName}" escapeXml="true"></c:out></span><br/>
	       </c:if> 
	       <c:if test="${userFirmListSize > 1}" ><span class="strong">
<a href="${pageNameString}.form?RoofAction_action%3DchangeProvider%23save%3Dtrue%23validate%3Dfalse%23providerId%3D${providerId}%23${uniqueId}" title="<fmt:message key="link_changeProvider" /> "><c:out value="${providerName}" escapeXml="true"></c:out></a></span><br/>
	      <span><fmt:message key="PUI_ContentID_1052" /></span>
	      </c:if>
     	</c:if> 
     </div>
  </c:when>
  <c:otherwise>
     <div class="ccmsUserInfo">
     	<c:if test="${userName != null}" >
	    	<fmt:message key="PUI_ContentID_902" /><span class="strong">${userName}</span>
	   </c:if> 
     </div>
  </c:otherwise>
</c:choose>

</fmt:bundle> 
