#import "UiManagerIos.h"
#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#if __has_include(<React/RCTUIManagerUtils.h>)
#import <React/RCTUIManagerUtils.h>
#endif
#import <React/RCTBridge.h>

@implementation UiManagerIos

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

- (dispatch_queue_t)methodQueue
{
  return RCTGetUIManagerQueue();
}

- (void)registerView:(double)target {
    RCTLogInfo(@"target: %f", target);
    NSNumber *targetNumber = @(target);

    [self.bridge.uiManager addUIBlock:^(__unused RCTUIManager *uiManager, NSDictionary<NSNumber *, UIView *> *viewRegistry) {
        UIView *view = viewRegistry[targetNumber];

        if (!view) {
            RCTLogError(@"No view found with reactTag: %@", targetNumber);
            return;
        }

        RCTLogInfo(@"Successfully registered view with reactTag: %@", targetNumber);
    }];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeUiManagerIosSpecJSI>(params);
}

@end
