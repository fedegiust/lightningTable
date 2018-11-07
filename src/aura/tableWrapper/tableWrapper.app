<aura:application extends="force:slds">
    <aura:attribute name="headers" type="Object" />
    <aura:attribute name="centerHeaders" type="Boolean" />
    <aura:attribute name="data" type="Object" />
    <aura:attribute name="centerData" type="Boolean" />
    <aura:handler name="init" value="{!this}" action="{!c.init}" />
    <c:table columnHeaders="{!v.headers}"
             data="{!v.data}" />
</aura:application>