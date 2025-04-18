package com.uimanagerios

import android.view.View
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.bridge.UiThreadUtil
import com.facebook.react.uimanager.UIManagerHelper
import com.facebook.react.uimanager.common.UIManagerType

@ReactModule(name = UiManagerIosModule.NAME)
class UiManagerIosModule(private val reactContext: ReactApplicationContext) :
  NativeUiManagerIosSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun registerView(viewTag: Double) {
    val tag: Int = viewTag.toInt()
    UiThreadUtil.runOnUiThread {
       val uiManager = UIManagerHelper.getUIManager(this.reactContext, UIManagerType.FABRIC)
       val view = uiManager?.resolveView(tag)
       if (view === null) {
        Log.d("UiManagerIos", "No view found with reactTag: ${viewTag}")
       } else {
         Log.d("UiManagerIos", "Successfully registered view with reactTag: ${viewTag}")
       }
    }
  }

  companion object {
    const val NAME = "UiManagerIos"
  }
}
