package com.springtemplate.models;

import org.springframework.data.mongodb.core.mapping.Field;

public class AuditingMeta {

    @Field("IsDeleted")
    private Boolean isDeleted;

    @Field("LastModified")
    private String LastModified;

    @Field("CreatedBy")
    private String CreatedBy;

    @Field("CreatedOn")
    private String CreatedOn;

    @Field("LastModifiedBy")
    private String LastModifiedBy;


    public Boolean isIsDeleted() {
        return this.isDeleted;
    }

    public Boolean getIsDeleted() {
        return this.isDeleted;
    }

    public void setIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
    }

    public String getLastModified() {
        return this.LastModified;
    }

    public void setLastModified(String LastModified) {
        this.LastModified = LastModified;
    }

    public String getCreatedBy() {
        return this.CreatedBy;
    }

    public void setCreatedBy(String CreatedBy) {
        this.CreatedBy = CreatedBy;
    }

    public String getCreatedOn() {
        return this.CreatedOn;
    }

    public void setCreatedOn(String CreatedOn) {
        this.CreatedOn = CreatedOn;
    }

    public String getLastModifiedBy() {
        return this.LastModifiedBy;
    }

    public void setLastModifiedBy(String LastModifiedBy) {
        this.LastModifiedBy = LastModifiedBy;
    }
}
