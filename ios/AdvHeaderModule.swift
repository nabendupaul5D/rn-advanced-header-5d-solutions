//
//  AdvHeaderModule.swift
//  AdvHeaderModule
//
//  Copyright © 2022 Nabendu Paul. All rights reserved.
//

import Foundation

@objc(AdvHeaderModule)
class AdvHeaderModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
