<aura:application >
    <aura:attribute name="headers" type="Object" />
    <aura:attribute name="centerHeaders" type="Boolean" />
    <aura:attribute name="data" type="Object" />
    <aura:attribute name="centerData" type="Boolean" />
    
    <c:table columnHeaders="{!v.headers}"
             data="{!v.data}" />
</aura:application>