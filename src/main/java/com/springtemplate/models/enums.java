package com.springtemplate.models;

public class enums {
    public enum Role {
        ADMINISTRATOR("Administrator", 0), USER("User", 1);

        private final String Key;
        private final Integer value;

        Role(String key, Integer value) {
            this.Key = key;
            this.value = value;
        }

        public String getKey() {
            return this.Key;
        }

        public Integer getValue() {
            return this.value;
        }
    }
}
