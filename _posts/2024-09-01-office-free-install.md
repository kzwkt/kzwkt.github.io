download  Office Deployment Tool (ODT)  
https://learn.microsoft.com/en-us/microsoft-365-apps/deploy/overview-office-deployment-tool   
https://www.microsoft.com/en-ca/download/details.aspx?id=49117  

you get officedeploymenttool_17830-20162.exe which is a sfx (self extracting executable) archive , run or extract with 7zip   

you get  setup.exe , configuration-Office365-x64.xml  


 .\setup.exe /?

Office Deployment Tool

Setup [mode] [path]

Setup /download [path to configuration file]
Setup /configure [path to configuration file]
Setup /packager [path to configuration file] [output path]
Setup /customize [path to configuration file]
Setup /help

 /download Downloads files to create an Office installation source
 /configure Adds, removes, or configures an Office installation
 /packager Produces an Office App-V package from an Office installation source
 /customize Applies settings for Office applications
 /help Displays this message

 
download
setup.exe /download configuration.xml    


to install  
setup.exe /configure installconfig.xml    


modify installed
setup.exe /customize preferencesconfig.xml

make app-v package
setup.exe /packager packageconfig.xml


online config generator    

https://config.office.com/deploymentsettings    

Configuration.xml   
```
<Configuration ID="ff11f9ec-a846-41ff-96db-dcd293680cb6">
  <Add OfficeClientEdition="64" Channel="Current">
    <Product ID="O365BusinessEEANoTeamsRetail">
      <Language ID="en-us" />
      <ExcludeApp ID="Access" />
      <ExcludeApp ID="Groove" />
      <ExcludeApp ID="Lync" />
      <ExcludeApp ID="OneDrive" />
      <ExcludeApp ID="OneNote" />
      <ExcludeApp ID="Outlook" />
      <ExcludeApp ID="Publisher" />
    </Product>
  </Add>
  <Updates Enabled="TRUE" />
  <RemoveMSI />
  <Display Level="Full" AcceptEULA="TRUE" />
</Configuration>
```
[https://learn.microsoft.com/en-us/microsoft-365/troubleshoot/installation/product-ids-supported-office-deployment-click-to-run]




