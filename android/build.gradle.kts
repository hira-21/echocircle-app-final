android {
    ...
    signingConfigs {
        create("release") {
            keyAlias = System.getenv("echocircle_21")
            keyPassword = System.getenv("flustered21@HS")
            storeFile = file(System.getenv("KEYSTORE_FILE") ?: "keystore.jks")
            storePassword = System.getenv("flustered21@HS")
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("release")
        }
    }
}

