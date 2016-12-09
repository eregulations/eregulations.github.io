---
layout: archi-pages
lang: en
permalink: "/architecture/data-structure/"
title: 'Annexe: data structure'
ref: data-structure
weight: 9
---

# Data Structure

<h2 id="p1">1. eRegulations data</h2>

<table class="table table-condensed" style="font-size:11px;">
<thead>
	
	<tr>
		<th>Table name</th>
		<th>Model</th>
		<th>Column</th>
		<th>Type</th>
		<th>DbType</th>
		<th>Null<br/>able</th>
	</tr>
</thead>
<tbody style="font-weight: small;">
 <tr>
  <td>Admin_Block
  </td>
  <td>Block
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;'>
  <td>
  Admin_Block
  </td>
  <td>
  Block
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;'>
  <td>Admin_Block
  </td>
  <td>Block
  </td>
  <td>Description
  </td>
  <td>String
  </td>
  <td>NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr>
  <td>
  Admin_Block
  </td>
  <td>
  Block
  </td>
  <td>
  IsOptional
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr>
  <td>Admin_Block
  </td>
  <td>Block
  </td>
  <td>PhysicalPresence
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;'>
  <td>
  Admin_Block
  </td>
  <td>
  Block
  </td>
  <td>
  RepresentationThirdParty
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:6;'>
  <td>Admin_Block
  </td>
  <td>Block
  </td>
  <td>CreatedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr>
  <td>
  Admin_Block
  </td>
  <td>
  Block
  </td>
  <td>
  CreatedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:8;'>
  <td>Admin_Block
  </td>
  <td>Block
  </td>
  <td>ModifiedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:9;'>
  <td>
  Admin_Block
  </td>
  <td>
  Block
  </td>
  <td>
  ModifiedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:10;'>
  <td>Admin_Block
  </td>
  <td>Block
  </td>
  <td>IsInRecycleBin
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:11;'>
  <td>
  Admin_Block
  </td>
  <td>
  Block
  </td>
  <td>
  Deleted
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:12;'>
  <td>Admin_StepSectionVisibility
  </td>
  <td>StepSectionVisibility
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:13;'>
  <td>
  Admin_StepSectionVisibility
  </td>
  <td>
  StepSectionVisibility
  </td>
  <td>
  Step_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:14;'>
  <td>Admin_StepSectionVisibility
  </td>
  <td>StepSectionVisibility
  </td>
  <td>IsExpectedResultsVisible
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:15;'>
  <td>
  Admin_StepSectionVisibility
  </td>
  <td>
  StepSectionVisibility
  </td>
  <td>
  IsEntityInChargeVisible
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:16;'>
  <td>Admin_StepSectionVisibility
  </td>
  <td>StepSectionVisibility
  </td>
  <td>IsUnitInChargeVisible
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:17;'>
  <td>
  Admin_StepSectionVisibility
  </td>
  <td>
  StepSectionVisibility
  </td>
  <td>
  IsPersonInChargeVisible
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:18;'>
  <td>Admin_StepSectionVisibility
  </td>
  <td>StepSectionVisibility
  </td>
  <td>IsRequirementsVisible
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:19;'>
  <td>
  Admin_StepSectionVisibility
  </td>
  <td>
  StepSectionVisibility
  </td>
  <td>
  IsCostsVisible
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:20;'>
  <td>Admin_StepSectionVisibility
  </td>
  <td>StepSectionVisibility
  </td>
  <td>IsCostsCommentsVisible
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:21;'>
  <td>
  Admin_StepSectionVisibility
  </td>
  <td>
  StepSectionVisibility
  </td>
  <td>
  IsTimeframeVisible
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:22;'>
  <td>Admin_StepSectionVisibility
  </td>
  <td>StepSectionVisibility
  </td>
  <td>IsTimeframeWaintingTimeInLineVisible
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:23;'>
  <td>
  Admin_StepSectionVisibility
  </td>
  <td>
  StepSectionVisibility
  </td>
  <td>
  IsTimeframeTimeSpentAtTheCounterVisible
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:24;'>
  <td>Admin_StepSectionVisibility
  </td>
  <td>StepSectionVisibility
  </td>
  <td>IsTimeframeWaitingTimeUntilNextStepVisible
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:25;'>
  <td>
  Admin_StepSectionVisibility
  </td>
  <td>
  StepSectionVisibility
  </td>
  <td>
  IsTimeframeCommentsVisible
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:26;'>
  <td>Admin_StepSectionVisibility
  </td>
  <td>StepSectionVisibility
  </td>
  <td>IsLegalJustificationVisible
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:27;'>
  <td>
  Admin_StepSectionVisibility
  </td>
  <td>
  StepSectionVisibility
  </td>
  <td>
  IsLegalJustificationCommentsVisible
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:28;'>
  <td>Admin_StepSectionVisibility
  </td>
  <td>StepSectionVisibility
  </td>
  <td>IsAdditionalInfoVisible
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:29;'>
  <td>
  Admin_StepSectionVisibility
  </td>
  <td>
  StepSectionVisibility
  </td>
  <td>
  IsRecoursesVisible
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:30;'>
  <td>Admin_StepSectionVisibility
  </td>
  <td>StepSectionVisibility
  </td>
  <td>IsCertificationVisible
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:31;'>
  <td>
  Admin_Block_i18n
  </td>
  <td>
  Block_i18n
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:32;'>
  <td>Admin_Block_i18n
  </td>
  <td>Block_i18n
  </td>
  <td>Block_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:33;'>
  <td>
  Admin_Block_i18n
  </td>
  <td>
  Block_i18n
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:34;'>
  <td>Admin_Block_i18n
  </td>
  <td>Block_i18n
  </td>
  <td>Name
  </td>
  <td>String
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:35;'>
  <td>
  Admin_Block_i18n
  </td>
  <td>
  Block_i18n
  </td>
  <td>
  Description
  </td>
  <td>
  String
  </td>
  <td>
  NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:36;'>
  <td>Admin_Block_Step
  </td>
  <td>Block_Step
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:37;'>
  <td>
  Admin_Block_Step
  </td>
  <td>
  Block_Step
  </td>
  <td>
  Block_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:38;'>
  <td>Admin_Block_Step
  </td>
  <td>Block_Step
  </td>
  <td>Step_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:39;'>
  <td>
  Admin_Block_Step
  </td>
  <td>
  Block_Step
  </td>
  <td>
  [Order]
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:40;'>
  <td>Admin_Block_Step
  </td>
  <td>Block_Step
  </td>
  <td>IsParallele
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:41;'>
  <td>
  Admin_Block_Step
  </td>
  <td>
  Block_Step
  </td>
  <td>
  IsAlternative
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:42;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:43;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:44;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>MappingType
  </td>
  <td>String
  </td>
  <td>VarChar(20) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:45;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  Objective_ID
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:46;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>Block_ID
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:47;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  ExplanatoryText
  </td>
  <td>
  String
  </td>
  <td>
  NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:48;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>WebPageKeywords
  </td>
  <td>String
  </td>
  <td>NVarChar(250) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:49;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  WebPageDescription
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(250)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:50;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>CreatedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:51;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  CreatedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:52;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>ModifiedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:53;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  ModifiedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:54;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>IsInRecycleBin
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:55;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  Deleted
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:56;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>IsVisibleInPublicMenu
  </td>
  <td>Bool
  </td>
  <td>Bit
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:57;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  IsVisibleToGuest
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:58;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>Image1
  </td>
  <td>String
  </td>
  <td>NVarChar(255)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:59;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  Image2
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(255)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:60;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>Image3
  </td>
  <td>String
  </td>
  <td>NVarChar(255)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:61;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  IconURL
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(255)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:62;'>
  <td>Admin_Menu
  </td>
  <td>Menu
  </td>
  <td>IconActiveURL
  </td>
  <td>String
  </td>
  <td>NVarChar(255)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:63;'>
  <td>
  Admin_Menu
  </td>
  <td>
  Menu
  </td>
  <td>
  PublicLayoutNbCols
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:64;'>
  <td>Admin_Menu_i18n
  </td>
  <td>Menu_i18n
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:65;'>
  <td>
  Admin_Menu_i18n
  </td>
  <td>
  Menu_i18n
  </td>
  <td>
  Menu_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:66;'>
  <td>Admin_Menu_i18n
  </td>
  <td>Menu_i18n
  </td>
  <td>Lang
  </td>
  <td>String
  </td>
  <td>Char(2) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:67;'>
  <td>
  Admin_Menu_i18n
  </td>
  <td>
  Menu_i18n
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:68;'>
  <td>Admin_Menu_i18n
  </td>
  <td>Menu_i18n
  </td>
  <td>ExplanatoryText
  </td>
  <td>String
  </td>
  <td>NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:69;'>
  <td>
  Admin_Menu_i18n
  </td>
  <td>
  Menu_i18n
  </td>
  <td>
  WebPageKeywords
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(250)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:70;'>
  <td>Admin_Menu_i18n
  </td>
  <td>Menu_i18n
  </td>
  <td>WebPageDescription
  </td>
  <td>String
  </td>
  <td>NVarChar(250)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:71;'>
  <td>
  Admin_MenuHierarchicalData
  </td>
  <td>
  MenuHierarchicalData
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:72;'>
  <td>Admin_MenuHierarchicalData
  </td>
  <td>MenuHierarchicalData
  </td>
  <td>Parent_Id
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:73;'>
  <td>
  Admin_MenuHierarchicalData
  </td>
  <td>
  MenuHierarchicalData
  </td>
  <td>
  Child_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:74;'>
  <td>Admin_MenuHierarchicalData
  </td>
  <td>MenuHierarchicalData
  </td>
  <td>[Order]
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:75;'>
  <td>
  Admin_MenuPerLangVisibility
  </td>
  <td>
  MenuPerLangVisibility
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:76;'>
  <td>Admin_MenuPerLangVisibility
  </td>
  <td>MenuPerLangVisibility
  </td>
  <td>Menu_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:77;'>
  <td>
  Admin_MenuPerLangVisibility
  </td>
  <td>
  MenuPerLangVisibility
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:78;'>
  <td>Admin_MenuPerLangVisibility
  </td>
  <td>MenuPerLangVisibility
  </td>
  <td>Visible
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:79;'>
  <td>
  Admin_Object_Media
  </td>
  <td>
  Object_Media
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:80;'>
  <td>Admin_Object_Media
  </td>
  <td>Object_Media
  </td>
  <td>Object_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:81;'>
  <td>
  Admin_Object_Media
  </td>
  <td>
  Object_Media
  </td>
  <td>
  Type
  </td>
  <td>
  String
  </td>
  <td>
  VarChar(100)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:82;'>
  <td>Admin_Object_Media
  </td>
  <td>Object_Media
  </td>
  <td>Media_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:83;'>
  <td>
  Admin_Object_Media
  </td>
  <td>
  Object_Media
  </td>
  <td>
  [Order]
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:84;'>
  <td>Admin_Objective
  </td>
  <td>Objective
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:85;'>
  <td>
  Admin_Objective
  </td>
  <td>
  Objective
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:86;'>
  <td>Admin_Objective
  </td>
  <td>Objective
  </td>
  <td>CreatedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:87;'>
  <td>
  Admin_Objective
  </td>
  <td>
  Objective
  </td>
  <td>
  CreatedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:88;'>
  <td>Admin_Objective
  </td>
  <td>Objective
  </td>
  <td>ModifiedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:89;'>
  <td>
  Admin_Objective
  </td>
  <td>
  Objective
  </td>
  <td>
  ModifiedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:90;'>
  <td>Admin_Objective
  </td>
  <td>Objective
  </td>
  <td>IsInRecycleBin
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:91;'>
  <td>
  Admin_Objective
  </td>
  <td>
  Objective
  </td>
  <td>
  Deleted
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:92;'>
  <td>Admin_Objective
  </td>
  <td>Objective
  </td>
  <td>AdditionalInfo
  </td>
  <td>String
  </td>
  <td>NVarChar(1000)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:93;'>
  <td>
  Admin_Objective_Block
  </td>
  <td>
  Objective_Block
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:94;'>
  <td>Admin_Objective_Block
  </td>
  <td>Objective_Block
  </td>
  <td>Objective_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:95;'>
  <td>
  Admin_Objective_Block
  </td>
  <td>
  Objective_Block
  </td>
  <td>
  Block_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:96;'>
  <td>Admin_Objective_Block
  </td>
  <td>Objective_Block
  </td>
  <td>[Order]
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:97;'>
  <td>
  Admin_Objective_i18n
  </td>
  <td>
  Objective_i18n
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:98;'>
  <td>Admin_Objective_i18n
  </td>
  <td>Objective_i18n
  </td>
  <td>Objective_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:99;'>
  <td>
  Admin_Objective_i18n
  </td>
  <td>
  Objective_i18n
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:100;'>
  <td>Admin_Objective_i18n
  </td>
  <td>Objective_i18n
  </td>
  <td>Name
  </td>
  <td>String
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:101;'>
  <td>
  Admin_Objective_i18n
  </td>
  <td>
  Objective_i18n
  </td>
  <td>
  AdditionalInfo
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(1000)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:102;'>
  <td>Admin_ObjectiveHierarchicalData
  </td>
  <td>ObjectiveHierarchicalData
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:103;'>
  <td>
  Admin_ObjectiveHierarchicalData
  </td>
  <td>
  ObjectiveHierarchicalData
  </td>
  <td>
  Parent_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:104;'>
  <td>Admin_ObjectiveHierarchicalData
  </td>
  <td>ObjectiveHierarchicalData
  </td>
  <td>Child_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:105;'>
  <td>
  Admin_ObjectiveHierarchicalData
  </td>
  <td>
  ObjectiveHierarchicalData
  </td>
  <td>
  [Order]
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:106;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:107;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  PublishedStatus
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:108;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>IsRecourse
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:109;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  Certified
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:110;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>CertificationDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:111;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  CertificationUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:112;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>CertificationEntityInCharge_Id
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:113;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(300)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:114;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>PhysicalPresence
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:115;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  RepresentationThirdParty
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:116;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>IsOnline
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:117;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  OnlineStepURL
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(200)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:118;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>IsOptional
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:119;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  EntityInCharge_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:120;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>UnitInCharge_Id
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:121;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  PersonInCharge_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:122;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>Contact_Law_Id
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:123;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  Contact_Articles
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:124;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>RequirementsPhysicalPresence
  </td>
  <td>String
  </td>
  <td>VarChar(75)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:125;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  HasCosts
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:126;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>NoCostsReason
  </td>
  <td>String
  </td>
  <td>VarChar(75)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:127;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  IsPayMethodCash
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:128;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>IsPayMethodCheck
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:129;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  IsPayMethodCard
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:130;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>IsPayMethodOther
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:131;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  PayMethodOtherText
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(200)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:132;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>CostsComments
  </td>
  <td>String
  </td>
  <td>NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:133;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  WaintingTimeInLineMin
  </td>
  <td>
  Decimal
  </td>
  <td>
  Decimal(18,6)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:134;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>WaintingTimeInLineMax
  </td>
  <td>Decimal
  </td>
  <td>Decimal(18,6) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:135;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  TimeSpentAtTheCounterMin
  </td>
  <td>
  Decimal
  </td>
  <td>
  Decimal(18,6)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:136;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>TimeSpentAtTheCounterMax
  </td>
  <td>Decimal
  </td>
  <td>Decimal(18,6) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:137;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  WaitingTimeUntilNextStepMin
  </td>
  <td>
  Decimal
  </td>
  <td>
  Decimal(18,6)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:138;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>WaitingTimeUntilNextStepMax
  </td>
  <td>Decimal
  </td>
  <td>Decimal(18,6) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:139;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  TimeframeComments
  </td>
  <td>
  String
  </td>
  <td>
  NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:140;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>Timeframe_Law_Id
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:141;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  Timeframe_Articles
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:142;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>LawsComments
  </td>
  <td>String
  </td>
  <td>NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:143;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  AdditionalInfo
  </td>
  <td>
  String
  </td>
  <td>
  NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:144;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>CreatedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:145;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  CreatedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:146;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>ModifiedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:147;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  ModifiedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:148;'>
  <td>Admin_Step
  </td>
  <td>Step
  </td>
  <td>IsInRecycleBin
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:149;'>
  <td>
  Admin_Step
  </td>
  <td>
  Step
  </td>
  <td>
  Deleted
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:150;'>
  <td>Admin_Step_i18n
  </td>
  <td>Step_i18n
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:151;'>
  <td>
  Admin_Step_i18n
  </td>
  <td>
  Step_i18n
  </td>
  <td>
  Step_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:152;'>
  <td>Admin_Step_i18n
  </td>
  <td>Step_i18n
  </td>
  <td>Lang
  </td>
  <td>String
  </td>
  <td>Char(2) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:153;'>
  <td>
  Admin_Step_i18n
  </td>
  <td>
  Step_i18n
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(300)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:154;'>
  <td>Admin_Step_i18n
  </td>
  <td>Step_i18n
  </td>
  <td>PayMethodOtherText
  </td>
  <td>String
  </td>
  <td>NVarChar(200)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:155;'>
  <td>
  Admin_Step_i18n
  </td>
  <td>
  Step_i18n
  </td>
  <td>
  CostsComments
  </td>
  <td>
  String
  </td>
  <td>
  NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:156;'>
  <td>Admin_Step_i18n
  </td>
  <td>Step_i18n
  </td>
  <td>TimeframeComments
  </td>
  <td>String
  </td>
  <td>NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:157;'>
  <td>
  Admin_Step_i18n
  </td>
  <td>
  Step_i18n
  </td>
  <td>
  LawsComments
  </td>
  <td>
  String
  </td>
  <td>
  NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:158;'>
  <td>Admin_Step_i18n
  </td>
  <td>Step_i18n
  </td>
  <td>AdditionalInfo
  </td>
  <td>String
  </td>
  <td>NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:159;'>
  <td>
  Admin_Step_i18n
  </td>
  <td>
  Step_i18n
  </td>
  <td>
  Contact_Articles
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:160;'>
  <td>Admin_Step_i18n
  </td>
  <td>Step_i18n
  </td>
  <td>Timeframe_Articles
  </td>
  <td>String
  </td>
  <td>NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:161;'>
  <td>
  Admin_Step_Recourse
  </td>
  <td>
  Step_Recourse
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:162;'>
  <td>Admin_Step_Recourse
  </td>
  <td>Step_Recourse
  </td>
  <td>Step_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:163;'>
  <td>
  Admin_Step_Recourse
  </td>
  <td>
  Step_Recourse
  </td>
  <td>
  Recourse_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:164;'>
  <td>Admin_Step_Recourse
  </td>
  <td>Step_Recourse
  </td>
  <td>[Order]
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:165;'>
  <td>
  Admin_StepCost
  </td>
  <td>
  StepCost
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:166;'>
  <td>Admin_StepCost
  </td>
  <td>StepCost
  </td>
  <td>Step_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:167;'>
  <td>
  Admin_StepCost
  </td>
  <td>
  StepCost
  </td>
  <td>
  [Order]
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:168;'>
  <td>Admin_StepCost
  </td>
  <td>StepCost
  </td>
  <td>AggregateOperator
  </td>
  <td>String
  </td>
  <td>NVarChar(2) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:169;'>
  <td>
  Admin_StepCost
  </td>
  <td>
  StepCost
  </td>
  <td>
  IsSeparator
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:170;'>
  <td>Admin_StepCost
  </td>
  <td>StepCost
  </td>
  <td>Value
  </td>
  <td>Decimal
  </td>
  <td>Decimal(19,4) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:171;'>
  <td>
  Admin_StepCost
  </td>
  <td>
  StepCost
  </td>
  <td>
  Unit
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(10)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:172;'>
  <td>Admin_StepCost
  </td>
  <td>StepCost
  </td>
  <td>Operator
  </td>
  <td>String
  </td>
  <td>NVarChar(20) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:173;'>
  <td>
  Admin_StepCost
  </td>
  <td>
  StepCost
  </td>
  <td>
  Parameter
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:174;'>
  <td>Admin_StepCost
  </td>
  <td>StepCost
  </td>
  <td>Type
  </td>
  <td>String
  </td>
  <td>NVarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:175;'>
  <td>
  Admin_StepCost
  </td>
  <td>
  StepCost
  </td>
  <td>
  AverageValue
  </td>
  <td>
  Decimal
  </td>
  <td>
  Decimal(19,4)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:176;'>
  <td>Admin_StepCost
  </td>
  <td>StepCost
  </td>
  <td>Comments
  </td>
  <td>String
  </td>
  <td>NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:177;'>
  <td>
  Admin_StepCost
  </td>
  <td>
  StepCost
  </td>
  <td>
  AverageValueComments
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(1000)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:178;'>
  <td>Admin_StepCost
  </td>
  <td>StepCost
  </td>
  <td>FilterGlobalOption
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:179;'>
  <td>
  Admin_StepCost
  </td>
  <td>
  StepCost
  </td>
  <td>
  Law_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:180;'>
  <td>Admin_StepCost
  </td>
  <td>StepCost
  </td>
  <td>Articles
  </td>
  <td>String
  </td>
  <td>NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:181;'>
  <td>
  Admin_StepCost_i18n
  </td>
  <td>
  StepCost_i18n
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:182;'>
  <td>Admin_StepCost_i18n
  </td>
  <td>StepCost_i18n
  </td>
  <td>StepCost_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:183;'>
  <td>
  Admin_StepCost_i18n
  </td>
  <td>
  StepCost_i18n
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:184;'>
  <td>Admin_StepCost_i18n
  </td>
  <td>StepCost_i18n
  </td>
  <td>Comments
  </td>
  <td>String
  </td>
  <td>NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:185;'>
  <td>
  Admin_StepCost_i18n
  </td>
  <td>
  StepCost_i18n
  </td>
  <td>
  AverageValueComments
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(1000)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:186;'>
  <td>Admin_StepCost_i18n
  </td>
  <td>StepCost_i18n
  </td>
  <td>Articles
  </td>
  <td>String
  </td>
  <td>NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:187;'>
  <td>
  Admin_StepLaw
  </td>
  <td>
  StepLaw
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:188;'>
  <td>Admin_StepLaw
  </td>
  <td>StepLaw
  </td>
  <td>Step_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:189;'>
  <td>
  Admin_StepLaw
  </td>
  <td>
  StepLaw
  </td>
  <td>
  [Order]
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:190;'>
  <td>Admin_StepLaw
  </td>
  <td>StepLaw
  </td>
  <td>AggregateOperator
  </td>
  <td>String
  </td>
  <td>NVarChar(2) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:191;'>
  <td>
  Admin_StepLaw
  </td>
  <td>
  StepLaw
  </td>
  <td>
  Law_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:192;'>
  <td>Admin_StepLaw
  </td>
  <td>StepLaw
  </td>
  <td>Articles
  </td>
  <td>String
  </td>
  <td>NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:193;'>
  <td>
  Admin_StepLaw
  </td>
  <td>
  StepLaw
  </td>
  <td>
  Comments
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:194;'>
  <td>Admin_StepLaw_i18n
  </td>
  <td>StepLaw_i18n
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:195;'>
  <td>
  Admin_StepLaw_i18n
  </td>
  <td>
  StepLaw_i18n
  </td>
  <td>
  StepLaw_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:196;'>
  <td>Admin_StepLaw_i18n
  </td>
  <td>StepLaw_i18n
  </td>
  <td>Lang
  </td>
  <td>String
  </td>
  <td>Char(2) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:197;'>
  <td>
  Admin_StepLaw_i18n
  </td>
  <td>
  StepLaw_i18n
  </td>
  <td>
  Articles
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:198;'>
  <td>Admin_StepLaw_i18n
  </td>
  <td>StepLaw_i18n
  </td>
  <td>Comments
  </td>
  <td>String
  </td>
  <td>NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:199;'>
  <td>
  Admin_StepRequirement
  </td>
  <td>
  StepRequirement
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:200;'>
  <td>Admin_StepRequirement
  </td>
  <td>StepRequirement
  </td>
  <td>Step_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:201;'>
  <td>
  Admin_StepRequirement
  </td>
  <td>
  StepRequirement
  </td>
  <td>
  [Order]
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:202;'>
  <td>Admin_StepRequirement
  </td>
  <td>StepRequirement
  </td>
  <td>AggregateOperator
  </td>
  <td>String
  </td>
  <td>NVarChar(2) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:203;'>
  <td>
  Admin_StepRequirement
  </td>
  <td>
  StepRequirement
  </td>
  <td>
  Type
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:204;'>
  <td>Admin_StepRequirement
  </td>
  <td>StepRequirement
  </td>
  <td>GenericRequirement_Id
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:205;'>
  <td>
  Admin_StepRequirement
  </td>
  <td>
  StepRequirement
  </td>
  <td>
  StepResult_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:206;'>
  <td>Admin_StepRequirement
  </td>
  <td>StepRequirement
  </td>
  <td>NbOriginal
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:207;'>
  <td>
  Admin_StepRequirement
  </td>
  <td>
  StepRequirement
  </td>
  <td>
  NbCopy
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:208;'>
  <td>Admin_StepRequirement
  </td>
  <td>StepRequirement
  </td>
  <td>NbAuthenticated
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:209;'>
  <td>
  Admin_StepRequirement
  </td>
  <td>
  StepRequirement
  </td>
  <td>
  Comments
  </td>
  <td>
  String
  </td>
  <td>
  NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:210;'>
  <td>Admin_StepRequirement
  </td>
  <td>StepRequirement
  </td>
  <td>FilterGlobalOption
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:211;'>
  <td>
  Admin_StepRequirement
  </td>
  <td>
  StepRequirement
  </td>
  <td>
  Law_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:212;'>
  <td>Admin_StepRequirement
  </td>
  <td>StepRequirement
  </td>
  <td>Articles
  </td>
  <td>String
  </td>
  <td>NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:213;'>
  <td>
  Admin_StepRequirement_i18n
  </td>
  <td>
  StepRequirement_i18n
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:214;'>
  <td>Admin_StepRequirement_i18n
  </td>
  <td>StepRequirement_i18n
  </td>
  <td>StepRequirement_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:215;'>
  <td>
  Admin_StepRequirement_i18n
  </td>
  <td>
  StepRequirement_i18n
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:216;'>
  <td>Admin_StepRequirement_i18n
  </td>
  <td>StepRequirement_i18n
  </td>
  <td>Comments
  </td>
  <td>String
  </td>
  <td>NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:217;'>
  <td>
  Admin_StepRequirement_i18n
  </td>
  <td>
  StepRequirement_i18n
  </td>
  <td>
  Articles
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:218;'>
  <td>Admin_StepResult
  </td>
  <td>StepResult
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:219;'>
  <td>
  Admin_StepResult
  </td>
  <td>
  StepResult
  </td>
  <td>
  Step_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:220;'>
  <td>Admin_StepResult
  </td>
  <td>StepResult
  </td>
  <td>[Order]
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:221;'>
  <td>
  Admin_StepResult
  </td>
  <td>
  StepResult
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:222;'>
  <td>Admin_StepResult
  </td>
  <td>StepResult
  </td>
  <td>NbOriginal
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:223;'>
  <td>
  Admin_StepResult
  </td>
  <td>
  StepResult
  </td>
  <td>
  NbCopy
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:224;'>
  <td>Admin_StepResult
  </td>
  <td>StepResult
  </td>
  <td>NbAuthenticated
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:225;'>
  <td>
  Admin_StepResult
  </td>
  <td>
  StepResult
  </td>
  <td>
  Type
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:226;'>
  <td>Admin_StepResult
  </td>
  <td>StepResult
  </td>
  <td>Law_Id
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:227;'>
  <td>
  Admin_StepResult
  </td>
  <td>
  StepResult
  </td>
  <td>
  Articles
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:228;'>
  <td>Admin_StepResult
  </td>
  <td>StepResult
  </td>
  <td>IsDocumentPresent
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:229;'>
  <td>
  Admin_StepResult_i18n
  </td>
  <td>
  StepResult_i18n
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:230;'>
  <td>Admin_StepResult_i18n
  </td>
  <td>StepResult_i18n
  </td>
  <td>StepResult_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:231;'>
  <td>
  Admin_StepResult_i18n
  </td>
  <td>
  StepResult_i18n
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:232;'>
  <td>Admin_StepResult_i18n
  </td>
  <td>StepResult_i18n
  </td>
  <td>Name
  </td>
  <td>String
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:233;'>
  <td>
  Admin_StepResult_i18n
  </td>
  <td>
  StepResult_i18n
  </td>
  <td>
  Articles
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(400)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:234;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:235;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:236;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>Address
  </td>
  <td>String
  </td>
  <td>NVarChar(250)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:237;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  City
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:238;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>PostalCode
  </td>
  <td>String
  </td>
  <td>NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:239;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  CountryCode
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:240;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>Phone1
  </td>
  <td>String
  </td>
  <td>NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:241;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  Phone2
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:242;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>Fax1
  </td>
  <td>String
  </td>
  <td>NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:243;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  Fax2
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:244;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>Email1
  </td>
  <td>String
  </td>
  <td>NVarChar(100)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:245;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  Email2
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:246;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>Website1
  </td>
  <td>String
  </td>
  <td>NVarChar(250)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:247;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  Website2
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(250)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:248;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>Image
  </td>
  <td>String
  </td>
  <td>NVarChar(255)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:249;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay1MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:250;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay1MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:251;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay1EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:252;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay1EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:253;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay1IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:254;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay1IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:255;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay2MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:256;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay2MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:257;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay2EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:258;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay2EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:259;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay2IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:260;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay2IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:261;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay3MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:262;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay3MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:263;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay3EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:264;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay3EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:265;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay3IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:266;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay3IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:267;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay4MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:268;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay4MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:269;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay4EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:270;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay4EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:271;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay4IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:272;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay4IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:273;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay5MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:274;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay5MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:275;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay5EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:276;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay5EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:277;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay5IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:278;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay5IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:279;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay6MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:280;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay6MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:281;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay6EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:282;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay6EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:283;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay6IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:284;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay6IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:285;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay7MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:286;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay7MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:287;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay7EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:288;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay7EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:289;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleDay7IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:290;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ScheduleDay7IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:291;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ScheduleComments
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(500)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:292;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>CreatedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:293;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  CreatedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:294;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>ModifiedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:295;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  ModifiedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:296;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>OwnershipStatus
  </td>
  <td>String
  </td>
  <td>VarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:297;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  Deleted
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:298;'>
  <td>EntityInCharge
  </td>
  <td>EntityInCharge
  </td>
  <td>IsVisibleInPublicDirectory
  </td>
  <td>Bool
  </td>
  <td>Bit
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:299;'>
  <td>
  EntityInCharge
  </td>
  <td>
  EntityInCharge
  </td>
  <td>
  GoogleMapsURL
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(800)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:300;'>
  <td>EntityInCharge_i18n
  </td>
  <td>EntityInCharge_i18n
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:301;'>
  <td>
  EntityInCharge_i18n
  </td>
  <td>
  EntityInCharge_i18n
  </td>
  <td>
  EntityInCharge_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:302;'>
  <td>EntityInCharge_i18n
  </td>
  <td>EntityInCharge_i18n
  </td>
  <td>Lang
  </td>
  <td>String
  </td>
  <td>Char(2) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:303;'>
  <td>
  EntityInCharge_i18n
  </td>
  <td>
  EntityInCharge_i18n
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:304;'>
  <td>EntityInCharge_i18n
  </td>
  <td>EntityInCharge_i18n
  </td>
  <td>Address
  </td>
  <td>String
  </td>
  <td>NVarChar(250)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:305;'>
  <td>
  EntityInCharge_i18n
  </td>
  <td>
  EntityInCharge_i18n
  </td>
  <td>
  City
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:306;'>
  <td>EntityInCharge_i18n
  </td>
  <td>EntityInCharge_i18n
  </td>
  <td>Website1
  </td>
  <td>String
  </td>
  <td>NVarChar(250)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:307;'>
  <td>
  EntityInCharge_i18n
  </td>
  <td>
  EntityInCharge_i18n
  </td>
  <td>
  Website2
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(250)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:308;'>
  <td>EntityInCharge_i18n
  </td>
  <td>EntityInCharge_i18n
  </td>
  <td>ScheduleComments
  </td>
  <td>String
  </td>
  <td>NVarChar(500)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:309;'>
  <td>
  GenericRequirement
  </td>
  <td>
  GenericRequirement
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:310;'>
  <td>GenericRequirement
  </td>
  <td>GenericRequirement
  </td>
  <td>Name
  </td>
  <td>String
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:311;'>
  <td>
  GenericRequirement
  </td>
  <td>
  GenericRequirement
  </td>
  <td>
  Description
  </td>
  <td>
  String
  </td>
  <td>
  NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:312;'>
  <td>GenericRequirement
  </td>
  <td>GenericRequirement
  </td>
  <td>Type
  </td>
  <td>String
  </td>
  <td>NVarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:313;'>
  <td>
  GenericRequirement
  </td>
  <td>
  GenericRequirement
  </td>
  <td>
  CreatedDate
  </td>
  <td>
  DateTime
  </td>
  <td>
  DateTime
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:314;'>
  <td>GenericRequirement
  </td>
  <td>GenericRequirement
  </td>
  <td>CreatedUser
  </td>
  <td>String
  </td>
  <td>NVarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:315;'>
  <td>
  GenericRequirement
  </td>
  <td>
  GenericRequirement
  </td>
  <td>
  ModifiedDate
  </td>
  <td>
  DateTime
  </td>
  <td>
  DateTime
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:316;'>
  <td>GenericRequirement
  </td>
  <td>GenericRequirement
  </td>
  <td>ModifiedUser
  </td>
  <td>String
  </td>
  <td>NVarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:317;'>
  <td>
  GenericRequirement
  </td>
  <td>
  GenericRequirement
  </td>
  <td>
  OwnershipStatus
  </td>
  <td>
  String
  </td>
  <td>
  VarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:318;'>
  <td>GenericRequirement
  </td>
  <td>GenericRequirement
  </td>
  <td>Deleted
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:319;'>
  <td>
  GenericRequirement
  </td>
  <td>
  GenericRequirement
  </td>
  <td>
  IsDocumentPresent
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:320;'>
  <td>GenericRequirement
  </td>
  <td>GenericRequirement
  </td>
  <td>IsVisibleInPublicDirectory
  </td>
  <td>Bool
  </td>
  <td>Bit
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:321;'>
  <td>
  GenericRequirement_i18n
  </td>
  <td>
  GenericRequirement_i18n
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:322;'>
  <td>GenericRequirement_i18n
  </td>
  <td>GenericRequirement_i18n
  </td>
  <td>GenericRequirement_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:323;'>
  <td>
  GenericRequirement_i18n
  </td>
  <td>
  GenericRequirement_i18n
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:324;'>
  <td>GenericRequirement_i18n
  </td>
  <td>GenericRequirement_i18n
  </td>
  <td>Name
  </td>
  <td>String
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:325;'>
  <td>
  GenericRequirement_i18n
  </td>
  <td>
  GenericRequirement_i18n
  </td>
  <td>
  Description
  </td>
  <td>
  String
  </td>
  <td>
  NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:326;'>
  <td>Law
  </td>
  <td>Law
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:327;'>
  <td>
  Law
  </td>
  <td>
  Law
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(300)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:328;'>
  <td>Law
  </td>
  <td>Law
  </td>
  <td>Description
  </td>
  <td>String
  </td>
  <td>NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:329;'>
  <td>
  Law
  </td>
  <td>
  Law
  </td>
  <td>
  CreatedDate
  </td>
  <td>
  DateTime
  </td>
  <td>
  DateTime
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:330;'>
  <td>Law
  </td>
  <td>Law
  </td>
  <td>CreatedUser
  </td>
  <td>String
  </td>
  <td>NVarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:331;'>
  <td>
  Law
  </td>
  <td>
  Law
  </td>
  <td>
  ModifiedDate
  </td>
  <td>
  DateTime
  </td>
  <td>
  DateTime
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:332;'>
  <td>Law
  </td>
  <td>Law
  </td>
  <td>ModifiedUser
  </td>
  <td>String
  </td>
  <td>NVarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:333;'>
  <td>
  Law
  </td>
  <td>
  Law
  </td>
  <td>
  OwnershipStatus
  </td>
  <td>
  String
  </td>
  <td>
  VarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:334;'>
  <td>Law
  </td>
  <td>Law
  </td>
  <td>Deleted
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:335;'>
  <td>
  Law
  </td>
  <td>
  Law
  </td>
  <td>
  IsDocumentPresent
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:336;'>
  <td>Law
  </td>
  <td>Law
  </td>
  <td>IsVisibleInPublicDirectory
  </td>
  <td>Bool
  </td>
  <td>Bit
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:337;'>
  <td>
  Law_i18n
  </td>
  <td>
  Law_i18n
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:338;'>
  <td>Law_i18n
  </td>
  <td>Law_i18n
  </td>
  <td>Law_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:339;'>
  <td>
  Law_i18n
  </td>
  <td>
  Law_i18n
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:340;'>
  <td>Law_i18n
  </td>
  <td>Law_i18n
  </td>
  <td>Name
  </td>
  <td>String
  </td>
  <td>NVarChar(300) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:341;'>
  <td>
  Law_i18n
  </td>
  <td>
  Law_i18n
  </td>
  <td>
  Description
  </td>
  <td>
  String
  </td>
  <td>
  NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:342;'>
  <td>Media
  </td>
  <td>Media
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:343;'>
  <td>
  Media
  </td>
  <td>
  Media
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(300)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:344;'>
  <td>Media
  </td>
  <td>Media
  </td>
  <td>FileName
  </td>
  <td>String
  </td>
  <td>NVarChar(500)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:345;'>
  <td>
  Media
  </td>
  <td>
  Media
  </td>
  <td>
  Extention
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(15)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:346;'>
  <td>Media
  </td>
  <td>Media
  </td>
  <td>Description
  </td>
  <td>String
  </td>
  <td>NText
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:347;'>
  <td>
  Media
  </td>
  <td>
  Media
  </td>
  <td>
  Length
  </td>
  <td>
  Decimal
  </td>
  <td>
  Decimal(18,0)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:348;'>
  <td>Media
  </td>
  <td>Media
  </td>
  <td>PreviewImageName
  </td>
  <td>String
  </td>
  <td>NVarChar(100)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:349;'>
  <td>
  Media
  </td>
  <td>
  Media
  </td>
  <td>
  CreatedDate
  </td>
  <td>
  DateTime
  </td>
  <td>
  DateTime
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:350;'>
  <td>Media
  </td>
  <td>Media
  </td>
  <td>CreatedUser
  </td>
  <td>String
  </td>
  <td>NVarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:351;'>
  <td>
  Media
  </td>
  <td>
  Media
  </td>
  <td>
  ModifiedDate
  </td>
  <td>
  DateTime
  </td>
  <td>
  DateTime
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:352;'>
  <td>Media
  </td>
  <td>Media
  </td>
  <td>ModifiedUser
  </td>
  <td>String
  </td>
  <td>NVarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:353;'>
  <td>
  Media
  </td>
  <td>
  Media
  </td>
  <td>
  Deleted
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:354;'>
  <td>Media
  </td>
  <td>Media
  </td>
  <td>IsDocumentPresent
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:355;'>
  <td>
  Media_i18n
  </td>
  <td>
  Media_i18n
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:356;'>
  <td>Media_i18n
  </td>
  <td>Media_i18n
  </td>
  <td>Media_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:357;'>
  <td>
  Media_i18n
  </td>
  <td>
  Media_i18n
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:358;'>
  <td>Media_i18n
  </td>
  <td>Media_i18n
  </td>
  <td>Name
  </td>
  <td>String
  </td>
  <td>NVarChar(300) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:359;'>
  <td>
  PersonInCharge
  </td>
  <td>
  PersonInCharge
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:360;'>
  <td>PersonInCharge
  </td>
  <td>PersonInCharge
  </td>
  <td>UnitInCharge_Id
  </td>
  <td>Int32
  </td>
  <td>Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:361;'>
  <td>
  PersonInCharge
  </td>
  <td>
  PersonInCharge
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:362;'>
  <td>PersonInCharge
  </td>
  <td>PersonInCharge
  </td>
  <td>Profession
  </td>
  <td>String
  </td>
  <td>NVarChar(300)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:363;'>
  <td>
  PersonInCharge
  </td>
  <td>
  PersonInCharge
  </td>
  <td>
  Phone1
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:364;'>
  <td>PersonInCharge
  </td>
  <td>PersonInCharge
  </td>
  <td>Phone2
  </td>
  <td>String
  </td>
  <td>NVarChar(50)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:365;'>
  <td>
  PersonInCharge
  </td>
  <td>
  PersonInCharge
  </td>
  <td>
  Email1
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(100)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:366;'>
  <td>PersonInCharge
  </td>
  <td>PersonInCharge
  </td>
  <td>Email2
  </td>
  <td>String
  </td>
  <td>NVarChar(100)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:367;'>
  <td>
  PersonInCharge
  </td>
  <td>
  PersonInCharge
  </td>
  <td>
  Image
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(255)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:368;'>
  <td>PersonInCharge
  </td>
  <td>PersonInCharge
  </td>
  <td>CreatedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:369;'>
  <td>
  PersonInCharge
  </td>
  <td>
  PersonInCharge
  </td>
  <td>
  CreatedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:370;'>
  <td>PersonInCharge
  </td>
  <td>PersonInCharge
  </td>
  <td>ModifiedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:371;'>
  <td>
  PersonInCharge
  </td>
  <td>
  PersonInCharge
  </td>
  <td>
  ModifiedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:372;'>
  <td>PersonInCharge
  </td>
  <td>PersonInCharge
  </td>
  <td>OwnershipStatus
  </td>
  <td>String
  </td>
  <td>VarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:373;'>
  <td>
  PersonInCharge
  </td>
  <td>
  PersonInCharge
  </td>
  <td>
  Deleted
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:374;'>
  <td>PersonInCharge
  </td>
  <td>PersonInCharge
  </td>
  <td>IsVisibleInPublicDirectory
  </td>
  <td>Bool
  </td>
  <td>Bit
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:375;'>
  <td>
  PersonInCharge_i18n
  </td>
  <td>
  PersonInCharge_i18n
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:376;'>
  <td>PersonInCharge_i18n
  </td>
  <td>PersonInCharge_i18n
  </td>
  <td>PersonInCharge_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:377;'>
  <td>
  PersonInCharge_i18n
  </td>
  <td>
  PersonInCharge_i18n
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:378;'>
  <td>PersonInCharge_i18n
  </td>
  <td>PersonInCharge_i18n
  </td>
  <td>Name
  </td>
  <td>String
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:379;'>
  <td>
  PersonInCharge_i18n
  </td>
  <td>
  PersonInCharge_i18n
  </td>
  <td>
  Profession
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(300)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:380;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:381;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  EntityInCharge_Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:382;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>Name
  </td>
  <td>String
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:383;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  Image
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(255)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:384;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleIsInherited
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:385;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay1MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:386;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay1MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:387;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay1EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:388;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay1EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:389;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay1IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:390;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay1IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:391;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay2MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:392;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay2MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:393;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay2EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:394;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay2EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:395;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay2IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:396;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay2IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:397;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay3MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:398;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay3MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:399;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay3EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:400;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay3EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:401;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay3IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:402;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay3IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:403;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay4MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:404;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay4MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:405;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay4EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:406;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay4EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:407;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay4IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:408;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay4IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:409;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay5MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:410;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay5MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:411;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay5EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:412;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay5EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:413;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay5IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:414;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay5IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:415;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay6MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:416;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay6MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:417;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay6EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:418;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay6EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:419;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay6IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:420;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay6IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:421;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay7MorningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:422;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay7MorningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:423;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay7EveningStart
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(5)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:424;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay7EveningEnd
  </td>
  <td>String
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:425;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleDay7IsClosed
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:426;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ScheduleDay7IsNotAvailable
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:427;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ScheduleComments
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(500)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:428;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>CreatedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:429;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  CreatedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:430;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>ModifiedDate
  </td>
  <td>DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:431;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  ModifiedUser
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(50)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:432;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>OwnershipStatus
  </td>
  <td>String
  </td>
  <td>VarChar(50) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:433;'>
  <td>
  UnitInCharge
  </td>
  <td>
  UnitInCharge
  </td>
  <td>
  Deleted
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:434;'>
  <td>UnitInCharge
  </td>
  <td>UnitInCharge
  </td>
  <td>IsVisibleInPublicDirectory
  </td>
  <td>Bool
  </td>
  <td>Bit
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:435;'>
  <td>
  UnitInCharge_i18n
  </td>
  <td>
  UnitInCharge_i18n
  </td>
  <td>
  Id
  </td>
  <td>
  Int32
  </td>
  <td>
  Int
  NOT NULL IDENTITY
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:436;'>
  <td>UnitInCharge_i18n
  </td>
  <td>UnitInCharge_i18n
  </td>
  <td>UnitInCharge_Id
  </td>
  <td>Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:437;'>
  <td>
  UnitInCharge_i18n
  </td>
  <td>
  UnitInCharge_i18n
  </td>
  <td>
  Lang
  </td>
  <td>
  String
  </td>
  <td>
  Char(2)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:438;'>
  <td>UnitInCharge_i18n
  </td>
  <td>UnitInCharge_i18n
  </td>
  <td>Name
  </td>
  <td>String
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:439;'>
  <td>
  UnitInCharge_i18n
  </td>
  <td>
  UnitInCharge_i18n
  </td>
  <td>
  ScheduleComments
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(500)
  </td>
  <td>
  TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:440;'>
  <td>SystemLanguage
  </td>
  <td>SystemLanguage
  </td>
  <td>Code
  </td>
  <td>String
  </td>
  <td>VarChar(2) NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:441;'>
  <td>
  SystemLanguage
  </td>
  <td>
  SystemLanguage
  </td>
  <td>
  Name
  </td>
  <td>
  String
  </td>
  <td>
  NVarChar(20)
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:442;'>
  <td>SystemLanguage
  </td>
  <td>SystemLanguage
  </td>
  <td>IsActive
  </td>
  <td>Bool
  </td>
  <td>Bit NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:443;mso-yfti-lastrow:yes;'>
  <td>
  SystemLanguage
  </td>
  <td>
  SystemLanguage
  </td>
  <td>
  IsPrincipal
  </td>
  <td>
  Bool
  </td>
  <td>
  Bit
  NOT NULL
  </td>
  <td>
  FALSE
  </td>
 </tr>
</tbody>

</table>

<hr>

<h2 id="p2">2. Snapshots</h2>

<table class="table table-condensed" style="font-size:11px;">

<thead>
	
	<tr>
		<th>Table name</th>
		<th>Column name</th>
		<th>DbType</th>
		<th>Null<br/>able</th>
	</tr>
</thead>
<tbody>

  <tr>
  <td>SnapshotRegistry
  </td>
  <td>Id
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;'>
  <td>SnapshotRegistry
  </td>
  <td>Objective_id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;'>
  <td>SnapshotRegistry
  </td>
  <td>SnapshotVersion
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;'>
  <td>SnapshotRegistry
  </td>
  <td>SnapshotDate
  </td>
  <td>DateTime
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;'>
  <td>SnapshotRegistry
  </td>
  <td>IsCurrent
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;'>
  <td>SnapshotStep
  </td>
  <td>Registry_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:6;'>
  <td>SnapshotStep
  </td>
  <td>Objective_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:7;'>
  <td>SnapshotStep
  </td>
  <td>Block_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:8;'>
  <td>SnapshotStep
  </td>
  <td>IsRecourse
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:9;'>
  <td>SnapshotStep
  </td>
  <td>Step_Id
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:10;'>
  <td>SnapshotStep
  </td>
  <td>[Order]
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:11;'>
  <td>SnapshotStep
  </td>
  <td>IsParallele
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:12;'>
  <td>SnapshotStep
  </td>
  <td>IsAlternative
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:13;'>
  <td>SnapshotStep
  </td>
  <td>Certified
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:14;'>
  <td>SnapshotStep
  </td>
  <td>CertificationDate
  </td>
  <td>DateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:15;'>
  <td>SnapshotStep
  </td>
  <td>CertificationUser
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:16;'>
  <td>SnapshotStep
  </td>
  <td>Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:17;'>
  <td>SnapshotStep
  </td>
  <td>Lang
  </td>
  <td>VarChar(2)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:18;'>
  <td>SnapshotStep
  </td>
  <td>Name
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:19;'>
  <td>SnapshotStep
  </td>
  <td>PhysicalPresence
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:20;'>
  <td>SnapshotStep
  </td>
  <td>RepresentationThirdParty
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:21;'>
  <td>SnapshotStep
  </td>
  <td>IsOnline
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:22;'>
  <td>SnapshotStep
  </td>
  <td>OnlineStepURL
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:23;'>
  <td>SnapshotStep
  </td>
  <td>IsOptional
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:24;'>
  <td>SnapshotStep
  </td>
  <td>Contact_Law_Id
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:25;'>
  <td>SnapshotStep
  </td>
  <td>Contact_Law_Name
  </td>
  <td>NVarChar(300)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:26;'>
  <td>SnapshotStep
  </td>
  <td>Contact_Law_Description
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:27;'>
  <td>SnapshotStep
  </td>
  <td>Contact_Articles
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:28;'>
  <td>SnapshotStep
  </td>
  <td>RequirementsPhysicalPresence
  </td>
  <td>VarChar(75)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:29;'>
  <td>SnapshotStep
  </td>
  <td>HasCosts
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:30;'>
  <td>SnapshotStep
  </td>
  <td>NoCostsReason
  </td>
  <td>VarChar(75)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:31;'>
  <td>SnapshotStep
  </td>
  <td>IsPayMethodCash
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:32;'>
  <td>SnapshotStep
  </td>
  <td>IsPayMethodCheck
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:33;'>
  <td>SnapshotStep
  </td>
  <td>IsPayMethodCard
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:34;'>
  <td>SnapshotStep
  </td>
  <td>IsPayMethodOther
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:35;'>
  <td>SnapshotStep
  </td>
  <td>PayMethodOtherText
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:36;'>
  <td>SnapshotStep
  </td>
  <td>CostsComments
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:37;'>
  <td>SnapshotStep
  </td>
  <td>WaintingTimeInLineMin
  </td>
  <td>Decimal(18,6)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:38;'>
  <td>SnapshotStep
  </td>
  <td>WaintingTimeInLineMax
  </td>
  <td>Decimal(18,6) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:39;'>
  <td>SnapshotStep
  </td>
  <td>TimeSpentAtTheCounterMin
  </td>
  <td>Decimal(18,6)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:40;'>
  <td>SnapshotStep
  </td>
  <td>TimeSpentAtTheCounterMax
  </td>
  <td>Decimal(18,6) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:41;'>
  <td>SnapshotStep
  </td>
  <td>WaitingTimeUntilNextStepMin
  </td>
  <td>Decimal(18,6)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:42;'>
  <td>SnapshotStep
  </td>
  <td>WaitingTimeUntilNextStepMax
  </td>
  <td>Decimal(18,6) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:43;'>
  <td>SnapshotStep
  </td>
  <td>TimeframeComments
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:44;'>
  <td>SnapshotStep
  </td>
  <td>Timeframe_Law_Id
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:45;'>
  <td>SnapshotStep
  </td>
  <td>Timeframe_Law_Name
  </td>
  <td>NVarChar(300)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:46;'>
  <td>SnapshotStep
  </td>
  <td>Timeframe_Law_Description
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:47;'>
  <td>SnapshotStep
  </td>
  <td>Timeframe_Articles
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:48;'>
  <td>SnapshotStep
  </td>
  <td>LawsComments
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:49;'>
  <td>SnapshotStep
  </td>
  <td>AdditionalInfo
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:50;'>
  <td>SnapshotStep
  </td>
  <td>CertificationEntityInCharge_Id
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:51;'>
  <td>SnapshotStep
  </td>
  <td>CertificationEntityInCharge_Name
  </td>
  <td>NVarChar(100)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:52;'>
  <td>SnapshotStep
  </td>
  <td>Status
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:53;'>
  <td>SnapshotStep
  </td>
  <td>Version
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:54;'>
  <td>SnapshotStep
  </td>
  <td>StatusDate
  </td>
  <td>DateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:55;'>
  <td>SnapshotStepCost
  </td>
  <td>Registry_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:56;'>
  <td>SnapshotStepCost
  </td>
  <td>Objective_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:57;'>
  <td>SnapshotStepCost
  </td>
  <td>Block_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:58;'>
  <td>SnapshotStepCost
  </td>
  <td>Step_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:59;'>
  <td>SnapshotStepCost
  </td>
  <td>[Order]
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:60;'>
  <td>SnapshotStepCost
  </td>
  <td>Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:61;'>
  <td>SnapshotStepCost
  </td>
  <td>Lang
  </td>
  <td>VarChar(2)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:62;'>
  <td>SnapshotStepCost
  </td>
  <td>AggregateOperator
  </td>
  <td>NVarChar(2) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:63;'>
  <td>SnapshotStepCost
  </td>
  <td>IsSeparator
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:64;'>
  <td>SnapshotStepCost
  </td>
  <td>Value
  </td>
  <td>Decimal(19,4) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:65;'>
  <td>SnapshotStepCost
  </td>
  <td>Unit
  </td>
  <td>NVarChar(10)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:66;'>
  <td>SnapshotStepCost
  </td>
  <td>Operator
  </td>
  <td>NVarChar(20) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:67;'>
  <td>SnapshotStepCost
  </td>
  <td>Parameter
  </td>
  <td>NVarChar(100)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:68;'>
  <td>SnapshotStepCost
  </td>
  <td>Type
  </td>
  <td>NVarChar(50) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:69;'>
  <td>SnapshotStepCost
  </td>
  <td>AverageValue
  </td>
  <td>Decimal(19,4)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:70;'>
  <td>SnapshotStepCost
  </td>
  <td>Comments
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:71;'>
  <td>SnapshotStepCost
  </td>
  <td>AverageValueComments
  </td>
  <td>NVarChar(1000)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:72;'>
  <td>SnapshotStepCost
  </td>
  <td>FilterGlobalOption
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:73;'>
  <td>SnapshotStepCost
  </td>
  <td>Law_Id
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:74;'>
  <td>SnapshotStepCost
  </td>
  <td>Law_Name
  </td>
  <td>NVarChar(300)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:75;'>
  <td>SnapshotStepCost
  </td>
  <td>Law_Description
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:76;'>
  <td>SnapshotStepCost
  </td>
  <td>Articles
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:77;'>
  <td>SnapshotStepCost
  </td>
  <td>CalculatedValue
  </td>
  <td>Decimal(19,4)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:78;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Registry_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:79;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Objective_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:80;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Block_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:81;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Step_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:82;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:83;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Lang
  </td>
  <td>VarChar(2)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:84;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Name
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:85;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Address
  </td>
  <td>NVarChar(250)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:86;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>City
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:87;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>PostalCode
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:88;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>CountryCode
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:89;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Phone1
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:90;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Phone2
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:91;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Fax1
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:92;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Fax2
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:93;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Email1
  </td>
  <td>NVarChar(100)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:94;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Email2
  </td>
  <td>NVarChar(100)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:95;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Website1
  </td>
  <td>NVarChar(250)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:96;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Website2
  </td>
  <td>NVarChar(250)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:97;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>Image
  </td>
  <td>NVarChar(255)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:98;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay1MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:99;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay1MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:100;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay1EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:101;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay1EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:102;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay1IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:103;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay1IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:104;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay2MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:105;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay2MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:106;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay2EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:107;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay2EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:108;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay2IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:109;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay2IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:110;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay3MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:111;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay3MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:112;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay3EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:113;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay3EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:114;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay3IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:115;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay3IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:116;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay4MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:117;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay4MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:118;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay4EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:119;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay4EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:120;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay4IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:121;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay4IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:122;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay5MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:123;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay5MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:124;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay5EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:125;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay5EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:126;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay5IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:127;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay5IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:128;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay6MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:129;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay6MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:130;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay6EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:131;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay6EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:132;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay6IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:133;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay6IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:134;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay7MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:135;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay7MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:136;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay7EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:137;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay7EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:138;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay7IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:139;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleDay7IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:140;'>
  <td>SnapshotStepEntityInCharge
  </td>
  <td>ScheduleComments
  </td>
  <td>NVarChar(500)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:141;'>
  <td>SnapshotStepLaw
  </td>
  <td>Registry_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:142;'>
  <td>SnapshotStepLaw
  </td>
  <td>Objective_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:143;'>
  <td>SnapshotStepLaw
  </td>
  <td>Block_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:144;'>
  <td>SnapshotStepLaw
  </td>
  <td>Step_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:145;'>
  <td>SnapshotStepLaw
  </td>
  <td>[Order]
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:146;'>
  <td>SnapshotStepLaw
  </td>
  <td>Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:147;'>
  <td>SnapshotStepLaw
  </td>
  <td>Lang
  </td>
  <td>VarChar(2)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:148;'>
  <td>SnapshotStepLaw
  </td>
  <td>AggregateOperator
  </td>
  <td>NVarChar(2) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:149;'>
  <td>SnapshotStepLaw
  </td>
  <td>Law_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:150;'>
  <td>SnapshotStepLaw
  </td>
  <td>Law_Name
  </td>
  <td>NVarChar(300) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:151;'>
  <td>SnapshotStepLaw
  </td>
  <td>Law_Description
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:152;'>
  <td>SnapshotStepLaw
  </td>
  <td>Articles
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:153;'>
  <td>SnapshotStepLaw
  </td>
  <td>Comments
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:154;'>
  <td>SnapshotStepLaw
  </td>
  <td>Law_IsDocumentPresent
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:155;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Registry_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:156;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Objective_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:157;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Block_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:158;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Step_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:159;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:160;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Lang
  </td>
  <td>VarChar(2) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:161;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Name
  </td>
  <td>NVarChar(100)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:162;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Profession
  </td>
  <td>NVarChar(300)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:163;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Phone1
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:164;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Phone2
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:165;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Email1
  </td>
  <td>NVarChar(100)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:166;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Email2
  </td>
  <td>NVarChar(100)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:167;'>
  <td>SnapshotStepPersonInCharge
  </td>
  <td>Image
  </td>
  <td>NVarChar(255)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:168;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Registry_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:169;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Objective_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:170;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Block_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:171;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Step_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:172;'>
  <td>SnapshotStepRequirement
  </td>
  <td>[Order]
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:173;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:174;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Lang
  </td>
  <td>VarChar(2) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:175;'>
  <td>SnapshotStepRequirement
  </td>
  <td>AggregateOperator
  </td>
  <td>NVarChar(2)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:176;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Type
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:177;'>
  <td>SnapshotStepRequirement
  </td>
  <td>GenericRequirement_Id
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:178;'>
  <td>SnapshotStepRequirement
  </td>
  <td>GenericRequirement_Name
  </td>
  <td>NVarChar(100)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:179;'>
  <td>SnapshotStepRequirement
  </td>
  <td>GenericRequirement_Description
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:180;'>
  <td>SnapshotStepRequirement
  </td>
  <td>GenericRequirement_Type
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:181;'>
  <td>SnapshotStepRequirement
  </td>
  <td>StepResult_Id
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:182;'>
  <td>SnapshotStepRequirement
  </td>
  <td>StepResult_Step_Id
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:183;'>
  <td>SnapshotStepRequirement
  </td>
  <td>NbOriginal
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:184;'>
  <td>SnapshotStepRequirement
  </td>
  <td>NbCopy
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:185;'>
  <td>SnapshotStepRequirement
  </td>
  <td>NbAuthenticated
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:186;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Comments
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:187;'>
  <td>SnapshotStepRequirement
  </td>
  <td>FilterGlobalOption
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:188;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Law_Id
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:189;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Law_Name
  </td>
  <td>NVarChar(300)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:190;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Law_Description
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:191;'>
  <td>SnapshotStepRequirement
  </td>
  <td>Articles
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:192;'>
  <td>SnapshotStepRequirement
  </td>
  <td>GenericRequirement_IsDocumentPresent
  </td>
  <td>Bit
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:193;'>
  <td>SnapshotStepResult
  </td>
  <td>Registry_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:194;'>
  <td>SnapshotStepResult
  </td>
  <td>Objective_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:195;'>
  <td>SnapshotStepResult
  </td>
  <td>Block_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:196;'>
  <td>SnapshotStepResult
  </td>
  <td>Step_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:197;'>
  <td>SnapshotStepResult
  </td>
  <td>[Order]
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:198;'>
  <td>SnapshotStepResult
  </td>
  <td>Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:199;'>
  <td>SnapshotStepResult
  </td>
  <td>Lang
  </td>
  <td>VarChar(2)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:200;'>
  <td>SnapshotStepResult
  </td>
  <td>Name
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:201;'>
  <td>SnapshotStepResult
  </td>
  <td>NbOriginal
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:202;'>
  <td>SnapshotStepResult
  </td>
  <td>NbCopy
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:203;'>
  <td>SnapshotStepResult
  </td>
  <td>NbAuthenticated
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:204;'>
  <td>SnapshotStepResult
  </td>
  <td>Type
  </td>
  <td>NVarChar(50) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:205;'>
  <td>SnapshotStepResult
  </td>
  <td>Law_Id
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:206;'>
  <td>SnapshotStepResult
  </td>
  <td>Law_Name
  </td>
  <td>NVarChar(300)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:207;'>
  <td>SnapshotStepResult
  </td>
  <td>Law_Description
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:208;'>
  <td>SnapshotStepResult
  </td>
  <td>Articles
  </td>
  <td>NVarChar(400)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:209;'>
  <td>SnapshotStepResult
  </td>
  <td>IsDocumentPresent
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:210;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>Registry_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:211;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>Objective_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:212;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>Block_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:213;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>Step_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:214;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsExpectedResultsVisible
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:215;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsEntityInChargeVisible
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:216;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsUnitInChargeVisible
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:217;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsPersonInChargeVisible
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:218;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsRequirementsVisible
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:219;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsCostsVisible
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:220;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsCostsCommentsVisible
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:221;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsTimeframeVisible
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:222;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsTimeframeWaintingTimeInLineVisible
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:223;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsTimeframeTimeSpentAtTheCounterVisible
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:224;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsTimeframeWaitingTimeUntilNextStepVisible
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:225;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsTimeframeCommentsVisible
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:226;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsLegalJustificationVisible
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:227;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsLegalJustificationCommentsVisible
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:228;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsAdditionalInfoVisible
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:229;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsRecoursesVisible
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:230;'>
  <td>SnapshotStepSectionVisibility
  </td>
  <td>IsCertificationVisible
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:231;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>Registry_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:232;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>Objective_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:233;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>Block_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:234;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>Step_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:235;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:236;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>Lang
  </td>
  <td>VarChar(2) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:237;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>Name
  </td>
  <td>NVarChar(100)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:238;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>Image
  </td>
  <td>NVarChar(255)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:239;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleIsInherited
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:240;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay1MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:241;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay1MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:242;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay1EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:243;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay1EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:244;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay1IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:245;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay1IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:246;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay2MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:247;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay2MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:248;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay2EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:249;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay2EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:250;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay2IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:251;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay2IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:252;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay3MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:253;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay3MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:254;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay3EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:255;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay3EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:256;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay3IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:257;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay3IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:258;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay4MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:259;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay4MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:260;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay4EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:261;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay4EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:262;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay4IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:263;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay4IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:264;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay5MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:265;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay5MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:266;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay5EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:267;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay5EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:268;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay5IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:269;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay5IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:270;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay6MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:271;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay6MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:272;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay6EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:273;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay6EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:274;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay6IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:275;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay6IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:276;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay7MorningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:277;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay7MorningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:278;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay7EveningStart
  </td>
  <td>NVarChar(5) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:279;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay7EveningEnd
  </td>
  <td>NVarChar(5)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:280;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay7IsClosed
  </td>
  <td>Bit NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:281;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleDay7IsNotAvailable
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:282;'>
  <td>SnapshotStepUnitInCharge
  </td>
  <td>ScheduleComments
  </td>
  <td>NVarChar(500)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:283;'>
  <td>SnapshotObjective
  </td>
  <td>Registry_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:284;'>
  <td>SnapshotObjective
  </td>
  <td>Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:285;'>
  <td>SnapshotObjective
  </td>
  <td>Lang
  </td>
  <td>VarChar(2)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:286;'>
  <td>SnapshotObjective
  </td>
  <td>Name
  </td>
  <td>NVarChar(100) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:287;'>
  <td>SnapshotObjective
  </td>
  <td>AdditionalInfo
  </td>
  <td>NVarChar(1000)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:288;'>
  <td>SnapshotObject_Media
  </td>
  <td>Registry_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:289;'>
  <td>SnapshotObject_Media
  </td>
  <td>Objective_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:290;'>
  <td>SnapshotObject_Media
  </td>
  <td>Block_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:291;'>
  <td>SnapshotObject_Media
  </td>
  <td>Step_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:292;'>
  <td>SnapshotObject_Media
  </td>
  <td>Lang
  </td>
  <td>VarChar(2) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:293;'>
  <td>SnapshotObject_Media
  </td>
  <td>Object_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:294;'>
  <td>SnapshotObject_Media
  </td>
  <td>Type
  </td>
  <td>VarChar(100) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:295;'>
  <td>SnapshotObject_Media
  </td>
  <td>[Order]
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:296;'>
  <td>SnapshotObject_Media
  </td>
  <td>Media_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:297;'>
  <td>SnapshotObject_Media
  </td>
  <td>Media_Name
  </td>
  <td>NVarChar(300)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:298;'>
  <td>SnapshotObject_Media
  </td>
  <td>Media_FileName
  </td>
  <td>NVarChar(500)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:299;'>
  <td>SnapshotObject_Media
  </td>
  <td>Media_Extention
  </td>
  <td>NVarChar(15)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:300;'>
  <td>SnapshotObject_Media
  </td>
  <td>Media_Description
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:301;'>
  <td>SnapshotObject_Media
  </td>
  <td>Media_Length
  </td>
  <td>Decimal(18,0)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:302;'>
  <td>SnapshotObject_Media
  </td>
  <td>Media_PreviewImageName
  </td>
  <td>NVarChar(100)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:303;'>
  <td>SnapshotObject_Media
  </td>
  <td>Media_IsDocumentPresent
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:304;'>
  <td>SnapshotBlock
  </td>
  <td>Registry_Id
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:305;'>
  <td>SnapshotBlock
  </td>
  <td>Objective_Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:306;'>
  <td>SnapshotBlock
  </td>
  <td>[Order]
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:307;'>
  <td>SnapshotBlock
  </td>
  <td>Id
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:308;'>
  <td>SnapshotBlock
  </td>
  <td>Lang
  </td>
  <td>VarChar(2) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:309;'>
  <td>SnapshotBlock
  </td>
  <td>Name
  </td>
  <td>NVarChar(100)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:310;'>
  <td>SnapshotBlock
  </td>
  <td>Description
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:311;'>
  <td>SnapshotBlock
  </td>
  <td>IsOptional
  </td>
  <td>Bit
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:312;'>
  <td>SnapshotBlock
  </td>
  <td>PhysicalPresence
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:313;mso-yfti-lastrow:yes;'>
  <td>SnapshotBlock
  </td>
  <td>RepresentationThirdParty
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
</tbody>
</table>


<hr>

<h2 id="p3">3. Tracking</h2>

<table class="table table-condensed" style="font-size:11px;">


<thead>
	
	<tr>
		<th>Table name</th>
		<th>Model</th>
		<th>Column</th>
		<th>Type</th>
		<th>DbType</th>
		<th>Null<br/>able</th>
	</tr>
</thead>
<tbody>
  <tr >
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>Id
  </td>
  <td>System.Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>AuditRecordId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>FieldName
  </td>
  <td>System.String
  </td>
  <td>VarChar(100) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>FieldType
  </td>
  <td>System.String
  </td>
  <td>VarChar(100)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>OldValue_asInteger
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>NewValue_asInteger
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:6;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>OldValue_asDecimal
  </td>
  <td>System.Decimal
  </td>
  <td>Decimal(19,4)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:7;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>NewValue_asDecimal
  </td>
  <td>System.Decimal
  </td>
  <td>Decimal(19,4)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:8;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>OldValue_asText
  </td>
  <td>System.String
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:9;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>NewValue_asText
  </td>
  <td>System.String
  </td>
  <td>NText
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:10;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>OldValue_asDateTime
  </td>
  <td>System.DateTime
  </td>
  <td>DateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:11;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>NewValue_asDateTime
  </td>
  <td>System.DateTime
  </td>
  <td>DateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:12;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>OldValue_asBoolean
  </td>
  <td>System.Boolean
  </td>
  <td>Bit
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:13;'>
  <td>AuditRecordFields
  </td>
  <td>AuditRecordField
  </td>
  <td>NewValue_asBoolean
  </td>
  <td>System.Boolean
  </td>
  <td>Bit
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:14;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>Id
  </td>
  <td>System.Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:15;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>Action
  </td>
  <td>System.Byte
  </td>
  <td>TinyInt
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:16;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>EntityTable
  </td>
  <td>System.String
  </td>
  <td>VarChar(50) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:17;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>EntityTableKey
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:18;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>AssociationTable
  </td>
  <td>System.String
  </td>
  <td>VarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:19;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>AssociationTableKey
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:20;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>IsAssociationTranslated
  </td>
  <td>System.Boolean
  </td>
  <td>Bit
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:21;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>TranslationTable
  </td>
  <td>System.String
  </td>
  <td>VarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:22;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>TranslationTableKey
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:23;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>AuditDate
  </td>
  <td>System.DateTime
  </td>
  <td>DateTime
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:24;mso-yfti-lastrow:yes;'>
  <td>AuditRecords
  </td>
  <td>AuditRecord
  </td>
  <td>UserName
  </td>
  <td>System.String
  </td>
  <td>VarChar(50) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
</tbody>
</table>

<br/>

<h4>Relationship</h4>

<table class="table table-condensed" style="font-size:11px;">


<thead>
	
	<tr>
		<th>Table name</th>
		<th>ThisKey</th>
		<th>OtherKey</th>

		<th>Reference</th>
	</tr>
</thead>
<tbody>
  <tr >
	<td>AuditRecordFields</td>
  <td>AuditRecordId		
  </td>
  <td>Id
  </td>
  <td>AuditRecord
  </td>
 </tr>
</tbody>
</table>



<hr>

<h2 id="p4">4. Translator</h2>

<table class="table table-condensed" style="font-size:11px;">
 <thead>
	
	<tr>
		<th>Table name</th>
		<th>Model</th>
		<th>Column</th>
		<th>Type</th>
		<th>DbType</th>
		<th>Null<br/>able</th>
	</tr>
</thead>

 <tr >
  <td>Workspace
  </td>
  <td>Workspace
  </td>
  <td>Id
  </td>
  <td>System.Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;'>
  <td>Workspace
  </td>
  <td>Workspace
  </td>
  <td>Username
  </td>
  <td>System.String
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;'>
  <td>Workspace
  </td>
  <td>Workspace
  </td>
  <td>XMLSerializedItem_Id
  </td>
  <td>System.Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;'>
  <td>Workspace
  </td>
  <td>Workspace
  </td>
  <td>XMLSerializedItem_Name
  </td>
  <td>System.String
  </td>
  <td>NVarChar(1000)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;'>
  <td>Workspace
  </td>
  <td>Workspace
  </td>
  <td>StartDate
  </td>
  <td>System.DateTime
  </td>
  <td>DateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;'>
  <td>XMLSerializedItem
  </td>
  <td>XMLSerializedItem
  </td>
  <td>Id
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:6;'>
  <td>XMLSerializedItem
  </td>
  <td>XMLSerializedItem
  </td>
  <td>ObjectType
  </td>
  <td>System.String
  </td>
  <td>NVarChar(300) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:7;'>
  <td>XMLSerializedItem
  </td>
  <td>XMLSerializedItem
  </td>
  <td>ObjectId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:8;'>
  <td>XMLSerializedItem
  </td>
  <td>XMLSerializedItem
  </td>
  <td>ObjectVersion
  </td>
  <td>System.Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:9;'>
  <td>XMLSerializedItem
  </td>
  <td>XMLSerializedItem
  </td>
  <td>Data
  </td>
  <td>System.Xml.Linq.XElement
  </td>
  <td>Xml
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:10;'>
  <td>XMLSerializedItem
  </td>
  <td>XMLSerializedItem
  </td>
  <td>WordsDeleted
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:11;'>
  <td>XMLSerializedItem
  </td>
  <td>XMLSerializedItem
  </td>
  <td>WordsAdded
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:12;'>
  <td>XMLSerializedItem
  </td>
  <td>XMLSerializedItem
  </td>
  <td>CreatedDate
  </td>
  <td>System.DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:13;'>
  <td>XMLSerializedItem
  </td>
  <td>XMLSerializedItem
  </td>
  <td>CreatedUser
  </td>
  <td>System.String
  </td>
  <td>NVarChar(50)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:14;'>
  <td>XMLSerializedItem_i18n
  </td>
  <td>XMLSerializedItem_i18n
  </td>
  <td>Id
  </td>
  <td>System.Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:15;'>
  <td>XMLSerializedItem_i18n
  </td>
  <td>XMLSerializedItem_i18n
  </td>
  <td>XMLSerializedItem_Id
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:16;'>
  <td>XMLSerializedItem_i18n
  </td>
  <td>XMLSerializedItem_i18n
  </td>
  <td>Lang
  </td>
  <td>System.String
  </td>
  <td>Char(2) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:17;'>
  <td>XMLSerializedItem_i18n
  </td>
  <td>XMLSerializedItem_i18n
  </td>
  <td>TranslationVersion
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:18;'>
  <td>XMLSerializedItem_i18n
  </td>
  <td>XMLSerializedItem_i18n
  </td>
  <td>Data
  </td>
  <td>System.Xml.Linq.XElement
  </td>
  <td>Xml
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:19;'>
  <td>XMLSerializedItem_i18n
  </td>
  <td>XMLSerializedItem_i18n
  </td>
  <td>ModifiedDate
  </td>
  <td>System.DateTime
  </td>
  <td>DateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:20;'>
  <td>XMLSerializedItem_i18n
  </td>
  <td>XMLSerializedItem_i18n
  </td>
  <td>ModifiedUser
  </td>
  <td>System.String
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:21;'>
  <td>XMLSerializedItem_i18n
  </td>
  <td>XMLSerializedItem_i18n
  </td>
  <td>CommitDate
  </td>
  <td>System.DateTime
  </td>
  <td>DateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:22;'>
  <td>ProcedureContext
  </td>
  <td>ProcedureContext
  </td>
  <td>Id
  </td>
  <td>System.Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:23;'>
  <td>ProcedureContext
  </td>
  <td>ProcedureContext
  </td>
  <td>ProcedureId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:24;'>
  <td>ProcedureContext
  </td>
  <td>ProcedureContext
  </td>
  <td>ProcedureName
  </td>
  <td>System.String
  </td>
  <td>NVarChar(300) NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:25;'>
  <td>ProcedureContext
  </td>
  <td>ProcedureContext
  </td>
  <td>ObjectType
  </td>
  <td>System.String
  </td>
  <td>NVarChar(300)
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:26;mso-yfti-lastrow:yes;'>
  <td>ProcedureContext
  </td>
  <td>ProcedureContext
  </td>
  <td>ObjectId
  </td>
  <td>System.Int32
  </td>
  <td>Int NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
</table>



<hr>

<h2 id="p5">5. Consistency review</h2>


<table class="table table-condensed" style="font-size:11px;">

<thead>
	
	<tr>
		<th>Table name</th>
		<th>Model</th>
		<th>Column</th>
		<th>Type</th>
		<th>DbType</th>
		<th>Null<br/>able</th>
	</tr>
</thead>

<tbody>


  <tr >
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>id
  </td>
  <td>System.Int32
  </td>
  <td>Int NO T NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>systemId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>pagename
  </td>
  <td>System.String
  </td>
  <td>NVarChar(30)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>menuid
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>objectiveId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>stepId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:6;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>status
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:7;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>version
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:8;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>cycle
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:9;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>content
  </td>
  <td>System.String
  </td>
  <td>NVarChar(1000)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:10;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>dateCreated
  </td>
  <td>System.DateTime
  </td>
  <td>SmallDateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:11;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>creatorId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:12;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>isLast
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:13;'>
  <td>consistency_status
  </td>
  <td>Consistency_Status
  </td>
  <td>oldid
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:14;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>id
  </td>
  <td>System.Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:15;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>systemId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:16;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>objectiveId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:17;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>stepId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:18;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>stepGuid
  </td>
  <td>System.Guid
  </td>
  <td>UniqueIdentifier
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:19;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>section
  </td>
  <td>System.String
  </td>
  <td>NVarChar(50)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:20;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>objectId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:21;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>priority
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:22;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>status
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:23;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>content
  </td>
  <td>System.String
  </td>
  <td>NVarChar(1000)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:24;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>dateCreated
  </td>
  <td>System.DateTime
  </td>
  <td>SmallDateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:25;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>creatorId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:26;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>lastModified
  </td>
  <td>System.DateTime
  </td>
  <td>SmallDateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:27;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>modifierId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:28;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>commentsCounter
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:29;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>commentLastStatus
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:30;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>SEID
  </td>
  <td>System.String
  </td>
  <td>NVarChar(40)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:31;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>responsibleId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:32;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>pagename
  </td>
  <td>System.String
  </td>
  <td>NVarChar(30)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:33;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>menuid
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:34;'>
  <td>consistency_tickets
  </td>
  <td>Consistency_Ticket
  </td>
  <td>oldid
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:35;'>
  <td>consistency_comments
  </td>
  <td>Consistency_Comment
  </td>
  <td>id
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:36;'>
  <td>consistency_comments
  </td>
  <td>Consistency_Comment
  </td>
  <td>ticketId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:37;'>
  <td>consistency_comments
  </td>
  <td>Consistency_Comment
  </td>
  <td>dateCreated
  </td>
  <td>System.DateTime
  </td>
  <td>SmallDateTime
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:38;'>
  <td>consistency_comments
  </td>
  <td>Consistency_Comment
  </td>
  <td>userId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:39;'>
  <td>consistency_comments
  </td>
  <td>Consistency_Comment
  </td>
  <td>comment
  </td>
  <td>System.String
  </td>
  <td>NVarChar(1000)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:40;'>
  <td>consistency_comments
  </td>
  <td>Consistency_Comment
  </td>
  <td>status
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:41;'>
  <td>consistency_comments
  </td>
  <td>Consistency_Comment
  </td>
  <td>SEID
  </td>
  <td>System.String
  </td>
  <td>NVarChar(40)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:42;mso-yfti-lastrow:yes;'>
  <td>consistency_comments
  </td>
  <td>Consistency_Comment
  </td>
  <td>oldid
  </td>
  <td>System.Int32
  </td>
  <td>Int
  </td>
  <td>TRUE
  </td>
 </tr>
 
</tbody>
 
</table>


<hr>

<h2 id="p6">6. Statistics</h2>

<table class="table table-condensed" style="font-size:11px;">

<thead>	
	<tr>
		<th>Table name</th>
		<th>Model</th>
		<th>Column</th>
		<th>Type</th>
		<th>DbType</th>
		<th>Null<br/>able</th>
	</tr>
</thead>

<tbody>

 <tr>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>Id
  </td>
  <td>System.Int32
  </td>
  <td>Int NOT NULL IDENTITY
  </td>
  <td>FALSE
  </td>
 </tr>
 <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>SystemId
  </td>
  <td>System.Int32
  </td>
  <td>Int
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>CreatedDate
  </td>
  <td>System.DateTime
  </td>
  <td>DateTime NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>Type
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>Value
  </td>
  <td>System.Decimal
  </td>
  <td>Decimal(19,4)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>OptionalField1
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:6;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>OptionalValue1
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:7;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>OptionalField2
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:8;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>OptionalValue2
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:9;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>OptionalField3
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:10;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>OptionalValue3
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:11;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>OptionalField4
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:12;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>OptionalValue4
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:13;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>OptionalField5
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:14;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>OptionalValue5
  </td>
  <td>System.String
  </td>
  <td>NVarChar(200)
  </td>
  <td>TRUE
  </td>
 </tr>
 <tr style='mso-yfti-irow:15;mso-yfti-lastrow:yes;'>
  <td>StatisticSet
  </td>
  <td>StatisticSet
  </td>
  <td>SystemImageDate
  </td>
  <td>System.DateTime
  </td>
  <td>DateTime
  NOT NULL
  </td>
  <td>FALSE
  </td>
 </tr>
 </tbody>
</table>