plugins {
    id("com.android.application")
    kotlin("android")
}

android {
    namespace = "com.example.echocircle" // replace with your package name
    compileSdk = 34

    defaultConfig {
        applicationId = "com.example.echocircle" // replace with your package name
        minSdk = 21
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            // Signing config (use GitHub secrets or local keystore)
            signingConfig = signingConfigs.getByName("release")
        }
        debug {
            isMinifyEnabled = false
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }
}

signingConfigs {
    create("release") {
        keyAlias = System.getenv("KEY_ALIAS")          // GitHub secret or local alias
        keyPassword = System.getenv("KEY_PASSWORD")    // GitHub secret or local password
        storeFile = file(System.getenv("KEYSTORE_FILE") ?: "app/keystore.jks") // path to keystore
        storePassword = System.getenv("KEYSTORE_PASSWORD") // GitHub secret or local password
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.10.0")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.6.2")
    implementation("androidx.activity:activity-ktx:1.8.0")
    
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
}


